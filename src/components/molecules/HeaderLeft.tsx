import { Menu } from 'lucide-react';
import useLayoutStore from '@/store/layoutStore';

interface HeaderLeftProps {
  title?: string;
}

export const HeaderLeft: React.FC<HeaderLeftProps> = ({ title = 'Dashboard' }) => {
  const { toggleSidebar, isMobile } = useLayoutStore();

  return (
    <div className=" flex items-center w-full">
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="mr-4 p-1 rounded-md hover:bg-gray-100"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} className="text-gray-600" />
        </button>
      )}
      <h1 className="w-full text-lg md:text-xl lg:text-2xl text-center font-semibold text-gray-800 truncate max-w-xs md:max-w-sm">
        {title}
      </h1>
    </div>
  );
};
