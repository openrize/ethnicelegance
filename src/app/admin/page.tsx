import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ALL_PRODUCTS } from "@/data/products";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { DashboardRange, getRangeStartDate, parseDashboardRange } from "@/lib/admin-range";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export const metadata: Metadata = {
  title: "Admin Dashboard | Ethnic Elegance",
  robots: { index: false, follow: false },
};

type AdminPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readParam(
  params: Record<string, string | string[] | undefined>,
  key: string
): string | undefined {
  const raw = params[key];
  if (Array.isArray(raw)) return raw[0];
  return raw;
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(value);
}

function buildRangeHref(range: DashboardRange) {
  return range === "7d" ? "/admin" : `/admin?range=${range}`;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const configuredKey = process.env.ADMIN_DASHBOARD_KEY;
  const range = parseDashboardRange(readParam(params, "range"));
  const startDate = getRangeStartDate(range);

  if (!configuredKey) {
    return (
      <main className="min-h-screen bg-white p-8 md:p-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-amber-300 bg-amber-50 p-8">
          <h1 className="font-serif text-3xl font-bold text-amber-900 italic">
            Admin Dashboard Not Configured
          </h1>
          <p className="mt-3 text-amber-900/90">
            Add <code>ADMIN_DASHBOARD_KEY</code> to your <code>.env.local</code> file and reload.
          </p>
          <p className="mt-4 text-sm text-amber-900/80">
            Then login from <code>/admin/login</code>.
          </p>
        </div>
      </main>
    );
  }

  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect("/admin/login");
  }

  try {
    const { prisma } = await import("@/lib/prisma");

    const [leadCount, eventCount, recentLeads, eventsByChannel, productClicks] =
      await Promise.all([
        prisma.contactLead.count({ where: startDate ? { createdAt: { gte: startDate } } : undefined }),
        prisma.engagementEvent.count({ where: startDate ? { createdAt: { gte: startDate } } : undefined }),
        prisma.contactLead.findMany({
          where: startDate ? { createdAt: { gte: startDate } } : undefined,
          orderBy: { createdAt: "desc" },
          take: 20,
        }),
        prisma.engagementEvent.groupBy({
          by: ["channel"],
          _count: { _all: true },
          where: {
            eventType: "contact_click",
            ...(startDate ? { createdAt: { gte: startDate } } : {}),
          },
        }),
        prisma.engagementEvent.groupBy({
          by: ["productId"],
          _count: { _all: true },
          where: {
            eventType: "contact_click",
            productId: { not: null },
            ...(startDate ? { createdAt: { gte: startDate } } : {}),
          },
          orderBy: { _count: { productId: "desc" } },
          take: 8,
        }),
      ]);

    const totalTrackedClicks = eventsByChannel.reduce((sum, row) => sum + row._count._all, 0);

    return (
      <main className="min-h-screen bg-white p-6 md:p-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                Internal Admin
              </p>
              <h1 className="font-serif text-4xl font-bold italic text-primary">Growth Dashboard</h1>
            </div>
            <div className="flex items-center gap-5">
              <Link href={`/api/admin/leads?range=${range}`} className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary">
                Export Leads CSV
              </Link>
              <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary">
                Open Contact Page
              </Link>
              <AdminLogoutButton />
            </div>
          </div>

          <section className="flex flex-wrap items-center gap-2">
            {([
              ["today", "Today"],
              ["7d", "Last 7 Days"],
              ["30d", "Last 30 Days"],
              ["all", "All Time"],
            ] as const).map(([value, label]) => (
              <Link
                key={value}
                href={buildRangeHref(value)}
                className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  range === value
                    ? "border-primary bg-primary text-white"
                    : "border-border text-muted-foreground hover:border-secondary hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gray-50 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Total Leads</p>
              <p className="mt-2 text-4xl font-bold text-primary">{leadCount}</p>
            </div>
            <div className="rounded-2xl border border-border bg-gray-50 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Tracked Contact Clicks</p>
              <p className="mt-2 text-4xl font-bold text-primary">{totalTrackedClicks}</p>
            </div>
            <div className="rounded-2xl border border-border bg-gray-50 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">All Engagement Events</p>
              <p className="mt-2 text-4xl font-bold text-primary">{eventCount}</p>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border p-6">
              <h2 className="font-serif text-2xl font-bold italic text-primary">Contact Channel Split</h2>
              <div className="mt-5 space-y-3">
                {eventsByChannel.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No tracked clicks yet.</p>
                ) : (
                  eventsByChannel.map((row) => (
                    <div key={row.channel} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                      <span className="text-sm font-semibold capitalize text-primary">{row.channel}</span>
                      <span className="text-sm font-bold text-secondary">{row._count._all}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h2 className="font-serif text-2xl font-bold italic text-primary">Top Product Interest</h2>
              <div className="mt-5 space-y-3">
                {productClicks.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No product-specific clicks yet.</p>
                ) : (
                  productClicks.map((row) => {
                    const product = ALL_PRODUCTS.find((item) => item.id === row.productId);
                    return (
                      <div key={String(row.productId)} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                        <span className="text-sm font-semibold text-primary">
                          {product?.name ?? `Product #${row.productId}`}
                        </span>
                        <span className="text-sm font-bold text-secondary">{row._count._all}</span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border p-6">
            <h2 className="font-serif text-2xl font-bold italic text-primary">Recent Leads</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="py-3 pr-4">Time</th>
                    <th className="py-3 pr-4">Name</th>
                    <th className="py-3 pr-4">Email</th>
                    <th className="py-3 pr-4">Phone</th>
                    <th className="py-3 pr-4">Preferred</th>
                    <th className="py-3 pr-4">Subject</th>
                    <th className="py-3 pr-4">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-6 text-sm text-muted-foreground">
                        No leads captured yet.
                      </td>
                    </tr>
                  ) : (
                    recentLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-border/60 align-top text-sm">
                        <td className="py-4 pr-4 whitespace-nowrap">{formatDate(lead.createdAt)}</td>
                        <td className="py-4 pr-4 font-semibold text-primary">{lead.name}</td>
                        <td className="py-4 pr-4">{lead.email}</td>
                        <td className="py-4 pr-4">{lead.phone ?? "—"}</td>
                        <td className="py-4 pr-4 capitalize">{lead.preferredContact ?? "—"}</td>
                        <td className="py-4 pr-4">{lead.subject}</td>
                        <td className="py-4 pr-4">{lead.sourcePage ?? "—"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="min-h-screen bg-white p-8 md:p-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-8">
          <h1 className="font-serif text-3xl font-bold text-red-900 italic">
            Admin Dashboard Error
          </h1>
          <p className="mt-3 text-red-900/80">
            Unable to load dashboard data. Please verify production environment variables
            and database connectivity.
          </p>
          <p className="mt-4 text-sm text-red-900/70">
            {String(error)}
          </p>
        </div>
      </main>
    );
  }
}
