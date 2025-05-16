import { Bell, Settings } from 'lucide-react';
import { SearchInput } from '../atoms/form/SearchInput';
import { IconButton } from '../atoms/IconButton';
import UniversityLogo from '../atoms/UniversityLogo';

interface HeaderRightProps {
  appName?: string;
  logo?: React.ReactNode;
}

export const HeaderRight: React.FC<HeaderRightProps> = ({ appName, logo }) => {
  console.log("appName", appName)
  return (
    <div className="flex items-center mx-1 md:mx-10 space-x-1 md:space-x-4">
      {/* <SearchInput />*/}
      {/* <IconButton icon={Bell} badge />*/}
      {/* <IconButton icon={Settings} hiddenOnMobile />*/}
      <div className="hidden md:flex items-center space-x-3">        
        <span className="font-regular text-sm text-gray-700 hidden lg:inline">
          {appName || 'Application Name'}
        </span>
      </div>
      {logo}
    </div>
  );
};
