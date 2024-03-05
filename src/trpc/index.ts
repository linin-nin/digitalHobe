import { authRouter } from './auth-route';
import { router } from './trpc';
 
export const appRouter = router({
  auth: authRouter,
});
 
export type AppRouter = typeof appRouter;