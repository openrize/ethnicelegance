export type DashboardRange = "today" | "7d" | "30d" | "all";

export function parseDashboardRange(value: string | undefined): DashboardRange {
  if (value === "today" || value === "7d" || value === "30d" || value === "all") {
    return value;
  }
  return "7d";
}

export function getRangeStartDate(range: DashboardRange): Date | null {
  const now = new Date();
  if (range === "all") return null;
  if (range === "today") {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }
  const days = range === "7d" ? 7 : 30;
  return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
}
