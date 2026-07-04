import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getRangeStartDate, parseDashboardRange } from "@/lib/admin-range";

type SearchParams = Record<string, string | string[] | undefined>;

function readParam(params: SearchParams, key: string): string | undefined {
  const raw = params[key];
  if (Array.isArray(raw)) return raw[0];
  return raw;
}

function csvValue(value: string | number | null | undefined): string {
  if (value == null) return "";
  const text = String(value).replaceAll('"', '""');
  return `"${text}"`;
}

export async function GET(request: Request) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const params: SearchParams = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  const range = parseDashboardRange(readParam(params, "range"));
  const startDate = getRangeStartDate(range);

  const leads = await prisma.contactLead.findMany({
    where: startDate ? { createdAt: { gte: startDate } } : undefined,
    orderBy: { createdAt: "desc" },
  });

  const header = [
    "createdAt",
    "name",
    "email",
    "phone",
    "preferredContact",
    "subject",
    "message",
    "sourcePage",
    "productId",
  ];
  const rows = leads.map((lead) =>
    [
      csvValue(lead.createdAt.toISOString()),
      csvValue(lead.name),
      csvValue(lead.email),
      csvValue(lead.phone),
      csvValue(lead.preferredContact),
      csvValue(lead.subject),
      csvValue(lead.message),
      csvValue(lead.sourcePage),
      csvValue(lead.productId),
    ].join(",")
  );

  const csv = [header.join(","), ...rows].join("\n");
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${range}.csv"`,
    },
  });
}
