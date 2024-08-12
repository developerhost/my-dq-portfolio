import { useArrowNavigation } from '../../hooks/useArrowNavigation';
import { createLazyFileRoute } from '@tanstack/react-router';
import { FaUser } from 'react-icons/fa';

export const Route = createLazyFileRoute('/profile/')({
  component: Profile,
});

function Profile() {
  const fields = [
    '名前: 橋田至',
    'Lv: 28',
    '職業: エンジニア',
    '趣味: スマブラ・ピアノ',
    '好きな食べ物: ラーメン二郎・天下一品・麻婆豆腐',
  ];
  const selectedIndex = useArrowNavigation(fields.length);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black border-2 border-white rounded-md p-6 w-72">
        <div className="flex items-center justify-center mb-4">
          <FaUser className="w-8 h-8" />
          <h2 className="text-xl font-bold ml-2">Profile</h2>
        </div>
        <div className="text-left">
          {fields.map((field, index) => (
            <p key={index} className="flex items-center">
              {selectedIndex === index && (
                <span className="mr-2 animate-blink">{'▶️'}</span>
              )}
              {field}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
