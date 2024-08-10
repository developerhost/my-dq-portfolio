import { createLazyFileRoute } from '@tanstack/react-router';
import { FaUser } from 'react-icons/fa';

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
});

function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black border-2 border-white rounded-md p-6 w-72">
        <div className="flex items-center justify-center mb-4">
          <FaUser className="w-8 h-8" />
          <h2 className="text-xl font-bold ml-2">Profile</h2>
        </div>
        <div className="text-left">
          <p>名前: 橋田至</p>
          <p>Lv: 27</p>
          <p>職業: エンジニア</p>
          <p>趣味: スマブラ・ピアノ</p>
        </div>
      </div>
    </div>
  );
}
