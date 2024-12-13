import { FaHome, FaUser, FaShareAlt, FaBriefcase } from 'react-icons/fa';
import { SiCodeigniter } from 'react-icons/si';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
  { title: 'Home', url: '/', icon: FaHome },
  { title: 'Profile', url: '/profile', icon: FaUser },
  { title: 'SNS', url: '/sns', icon: FaShareAlt },
  { title: 'Portfolio', url: '/portfolio', icon: FaBriefcase },
  { title: 'Developer', url: '/developer', icon: SiCodeigniter },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="p-4 text-lg font-bold text-white">Navigation</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      className="flex items-center gap-2 p-2 text-white hover:bg-gray-800 rounded"
                      href={item.url}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="p-4 text-gray-400">© 2024 My App</p>
      </SidebarFooter>
    </Sidebar>
  );
};
