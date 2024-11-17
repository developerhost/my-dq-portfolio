import { createLazyFileRoute } from '@tanstack/react-router';
import Profile from './-components/Profile';
import Skills from './-components/Skills';

export const Route = createLazyFileRoute('/profile/')({
  component: ProfileContainer,
});

function ProfileContainer() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Profile />
      <Skills />
    </div>
  );
}
