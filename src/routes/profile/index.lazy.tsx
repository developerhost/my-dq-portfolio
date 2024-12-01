import { createLazyFileRoute } from '@tanstack/react-router';

import AcademicTable from './-components/AcademicTable';
import { Profile } from './-components/Profile';
import { Skills } from './-components/Skills';

const ProfileContainer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Profile />
      <Skills />
      <h2 className="text-2xl font-semibold mt-8 text-center">
        Educational background
      </h2>
      <AcademicTable />
    </div>
  );
};

export const Route = createLazyFileRoute('/profile/')({
  component: ProfileContainer,
});
