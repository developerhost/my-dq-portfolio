import { AppSidebar } from './AppSidebar';
import { PCHeader } from './PCHeader';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export const Header = () => {
  return (
    <SidebarProvider>
      {/* PC用ヘッダー */}
      <div className="hidden md:block">
        <PCHeader />
      </div>

      {/* サイドバー */}
      <div className="md:hidden fixed top-0 left-0 w-full p-2 flex justify-between bg-opacity-10 shadow-md z-10 border-2">
        <AppSidebar />

        {/* トリガー付きメインヘッダー */}
        <div className="fixed top-0 left-0 w-full p-2 flex justify-between bg-opacity-10 shadow-md z-10 border-2 md:hidden">
          <SidebarTrigger />
          <h1 className="text-lg font-bold">Hashida Portfolio</h1>
        </div>
      </div>
    </SidebarProvider>
  );
};
