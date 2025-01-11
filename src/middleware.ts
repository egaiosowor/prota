import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { getDashboardRoute } from "./routes";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/dashboard"],
};
