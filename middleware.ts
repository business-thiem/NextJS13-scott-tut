import { NextResponse } from 'next/server';

export const middleware = (request) => {
  return NextResponse.redirect(new URL('/', request.url));
};
export default middleware;

// matching malicious path requests
export const config = {
  matcher: ['/hax'],
};
