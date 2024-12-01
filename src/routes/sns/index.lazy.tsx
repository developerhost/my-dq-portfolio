import { useRef } from 'react';

import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { FaGithub, FaShareAlt, FaTwitter } from 'react-icons/fa';
import { useKey } from 'react-use';

import { Articles } from './-components/Articles';

import NoteIcon from '@/assets/icon/note-icon.svg';
import QiitaIcon from '@/assets/icon/qiita-icon.png';
import ZennIcon from '@/assets/icon/zenn-logo.svg';
import { useArrowNavigation } from '@/hooks/useArrowNavigation';

const SNS = () => {
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
      icon: <img alt="Qiita" className="w-4 h-4" src={QiitaIcon} />,
      link: 'https://qiita.com/app_js',
    },
    {
      label: 'Zenn',
      icon: <img alt="Zenn" className="w-4 h-4" src={ZennIcon} />,
      link: 'https://zenn.dev/dirtyman',
    },
    {
      label: 'note',
      icon: <img alt="note" className="w-4 h-4" src={NoteIcon} />,
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
              className="flex items-center"
              key={index}
              onClick={() => handleSelect(index)}
              tabIndex={0}
              target="_blank"
              to={field.link}
            >
              {selectedIndex === index && (
                <span className="mr-2 animate-blink">▶️</span>
              )}
              {field.icon}
              <span className="ml-2">{field.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <Articles />
    </div>
  );
};

export const Route = createLazyFileRoute('/sns/')({
  component: SNS,
});
