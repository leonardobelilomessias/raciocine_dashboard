import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/entrar',
    newUser:'/dashboard',
    signOut:"/"

  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/blog');
      const publicRoutes = ["/",'/landing', '/cadastro', '/login',];
      const privateRoutes = ['/dashboard', '/perfil', '/agendamentos',];
      const isPrivateRoutes = privateRoutes.includes(nextUrl.pathname)
      const isPublic = publicRoutes.includes(nextUrl.pathname)
      console.log(nextUrl.pathname)
      if(isPublic || isOnDashboard) return true
      if (isPrivateRoutes) {
        if (!isLoggedIn) return Response.redirect(new URL('/entrar', nextUrl)); // Redirect unauthenticated users to login page
        if(isLoggedIn) return true
        // return Response.redirect(new URL('/dashboard', nextUrl)); // Redirect unauthenticated users to login page
      } else if (!isLoggedIn) {
        return false
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;