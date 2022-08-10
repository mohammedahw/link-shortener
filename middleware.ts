import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const slug = req.nextUrl.pathname.split("/").pop();
  if (!slug) {
    return NextResponse.redirect(req.nextUrl);
  }

  const res = await fetch(`${req.nextUrl.origin}/api/links/${slug}`);
  const data = await res.json();

  if (!data.url) {
    return NextResponse.redirect(req.nextUrl.origin);
  }

  return NextResponse.redirect(data.url);
}

export const config = {
  matcher: "/:slug",
};
