import { PageTransition } from '@/components/PageTransition';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from '@tanstack/react-router';
import { Header } from '@/components/Header';

const RootComponent = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <hr />
      <div className="pt-16">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </div>
      {import.meta.env.MODE === 'development' && <TanStackRouterDevtools />}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
