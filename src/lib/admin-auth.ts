import { cookies } from "next/headers";

export const ADMIN_AUTH_COOKIE = "admin_auth";

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_AUTH_COOKIE)?.value === "1";
}
