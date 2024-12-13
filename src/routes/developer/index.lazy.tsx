import { createLazyFileRoute } from '@tanstack/react-router';

import { Developer } from './-components/Developer';

const DeveloperContainer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Developer />
    </div>
  );
};

export const Route = createLazyFileRoute('/developer/')({
  component: DeveloperContainer,
});
