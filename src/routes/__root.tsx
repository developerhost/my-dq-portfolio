import { BgmPlayer } from '@/components/BgmPlayer';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
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
        <BgmPlayer src="/src/assets/bgm/8bit-jo-jokyoku.mp3" />
      </div>
      <hr />
      <Outlet />
      {import.meta.env.MODE === 'development' && <TanStackRouterDevtools />}
    </>
  ),
});
