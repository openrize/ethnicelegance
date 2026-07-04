"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [key, setKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(String(data.error ?? "Unable to sign in."));
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-white p-8 md:p-12">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-gray-50 p-8">
        <h1 className="font-serif text-3xl font-bold text-primary italic">Admin Login</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sign in with your dashboard key to view leads and engagement metrics.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            value={key}
            onChange={(event) => setKey(event.target.value)}
            name="key"
            type="password"
            placeholder="Enter admin key"
            className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm focus:border-secondary focus:outline-none"
          />
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="h-12 rounded-xl bg-primary px-6 text-xs font-bold uppercase tracking-widest text-white hover:bg-secondary disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Open Dashboard"}
          </button>
        </form>
      </div>
    </main>
  );
}
