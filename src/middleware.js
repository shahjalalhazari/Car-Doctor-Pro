import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const token =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");
    const pathname = request.nextUrl.pathname;

    console.log("Token:", token); // Debug token presence

    if (pathname.includes("api")) {
        return NextResponse.next();
    }

    if (!token) {
        console.log("Token not found, redirecting...");
        const redirectUrl = new URL(`/sign-in`, request.url);
        redirectUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(redirectUrl);
    }

    console.log("Token found, allowing access...");
    return NextResponse.next();
};

export const config = {
    matcher: ["/my-bookings/:path*", "/booking/:path*"],
};
