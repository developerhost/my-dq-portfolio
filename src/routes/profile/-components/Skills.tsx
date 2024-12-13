import { FaHtml5, FaCss3Alt, FaCogs, FaAws, FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiGraphql,
  SiTailwindcss,
  SiVitess,
  SiNuxtdotjs,
  SiVuetify,
  SiJest,
  SiVitest,
  SiTrpc,
  SiShadcnui,
  SiPrisma,
  SiNextdns,
  SiZod,
  SiRecoil,
  SiPnpm,
} from 'react-icons/si';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Vue.js', icon: <SiVuedotjs /> },
  { name: 'Nuxt.js', icon: <SiNuxtdotjs /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Prisma', icon: <SiPrisma /> },
  { name: 'Auth.js(NextAuth)', icon: <SiNextdns /> },
  { name: 'Recoil', icon: <SiRecoil /> },
  { name: 'zod', icon: <SiZod /> },
  { name: 'Vite', icon: <SiVitess /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Vitest', icon: <SiVitest /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'TailWindCSS', icon: <SiTailwindcss /> },
  { name: 'shadcn/ui', icon: <SiShadcnui /> },
  { name: 'vuetify', icon: <SiVuetify /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'trpc', icon: <SiTrpc /> },
  { name: 'pnpm', icon: <SiPnpm /> },
];

export const Skills = () => {
  return (
    <div className="bg-black border-2 border-white rounded-md p-6 w-72 mt-2">
      <div className="flex items-center justify-center mb-4">
        <FaCogs className="w-8 h-8" />
        <h2 className="text-xl font-bold ml-2">Skills</h2>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div className="m-2 flex items-center" key={index}>
            {skill.icon}
            <span className="ml-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
