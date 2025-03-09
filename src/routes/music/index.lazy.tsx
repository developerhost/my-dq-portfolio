import { createLazyFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return <div>Hello</div>;
};

export const Route = createLazyFileRoute('/music/')({
  component: RouteComponent,
});
