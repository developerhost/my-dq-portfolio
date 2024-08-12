import { BgmPlayer } from '@/components/BgmPlayer';
import { PageTransition } from '@/components/PageTransition';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from '@tanstack/react-router';

const RootComponent = () => {
  const location = useLocation();

  return (
    <>
      <div className="p-2 flex gap-2 justify-between">
        <div className="flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/profile" className="[&.active]:font-bold">
            Profile
          </Link>
        </div>
        <BgmPlayer src="/bgm/8bit-jo-jokyoku.mp3" />
      </div>
      <hr />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      {import.meta.env.MODE === 'development' && <TanStackRouterDevtools />}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
