export { default } from 'next-auth/middleware';

// https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
// https://github.com/pillarjs/path-to-regexp#path-to-regexp
export const config = {
  matcher: ['/api/:function*', '/dashboard/:path*'],
};
