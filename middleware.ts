import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/api/:path*", "/"], // Public routes that don't require authentication
  ignoredRoutes: ["/((?!api|trpc))(_next|.+..+)(.*)", "/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
