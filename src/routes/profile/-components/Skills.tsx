import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaUser } from 'react-icons/fa';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'TailWindCSS', icon: <SiTailwindcss /> },
];

export default function Skills() {
  return (
    <div className="bg-black border-2 border-white rounded-md p-6 w-72 mt-2">
      <div className="flex items-center justify-center mb-4">
        <FaUser className="w-8 h-8" />
        <h2 className="text-xl font-bold ml-2">Skills</h2>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="m-2 flex items-center">
            {skill.icon}
            <span className="ml-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
