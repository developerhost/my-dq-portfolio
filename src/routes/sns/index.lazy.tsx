import { useArrowNavigation } from '@/hooks/useArrowNavigation';
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { useRef } from 'react';
import { FaGithub, FaShareAlt, FaTwitter } from 'react-icons/fa';
import QiitaIcon from '@/assets/icon/qiita-icon.png';
import ZennIcon from '@/assets/icon/zenn-logo.svg';
import NoteIcon from '@/assets/icon/note-icon.svg';
import { useKey } from 'react-use';

export const Route = createLazyFileRoute('/sns/')({
  component: SNS,
});

function SNS() {
  const fields = [
    {
      label: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://x.com/dall_develop',
    },
    {
      label: 'GitHub',
      icon: <FaGithub />,
      link: 'https://github.com/developerhost',
    },
    {
      label: 'Qiita',
      icon: <img src={QiitaIcon} alt="Qiita" className="w-4 h-4" />,
      link: 'https://qiita.com/app_js',
    },
    {
      label: 'Zenn',
      icon: <img src={ZennIcon} alt="Zenn" className="w-4 h-4" />,
      link: 'https://zenn.dev/dirtyman',
    },
    {
      label: 'note',
      icon: <img src={NoteIcon} alt="note" className="w-4 h-4" />,
      link: 'https://note.com/dall_develop',
    },
  ];

  const { selectedIndex, updateIndex } = useArrowNavigation(fields.length);
  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;

  const handleSelect = (index: number) => {
    updateIndex(index);
  };

  useKey('Enter', () => {
    const selectedField = fields[selectedIndexRef.current];
    window.open(selectedField.link, '_blank');
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-black border-2 border-white rounded-md p-6 w-72">
        <div className="flex items-center justify-center mb-4">
          <FaShareAlt className="w-8 h-8" />
          <h2 className="text-xl font-bold ml-2">SNS Links</h2>
        </div>
        <div className="text-left flex flex-col gap-y-2">
          {fields.map((field, index) => (
            <Link
              key={index}
              to={field.link}
              target="_blank"
              className="flex items-center"
              onClick={() => handleSelect(index)}
              tabIndex={0}
            >
              {selectedIndex === index && (
                <span className="mr-2 animate-blink">{'▶️'}</span>
              )}
              {field.icon}
              <span className="ml-2">{field.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
