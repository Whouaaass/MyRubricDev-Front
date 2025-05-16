import { ChevronLeft, Menu, X } from 'lucide-react';
import { IconButton } from '../atoms/IconButton';

interface SidebarHeaderProps {
  appName?: string;
  logo?: React.ReactNode;
  expanded: boolean;
  isMobile: boolean;
  toggle: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ appName = 'App Name', logo, expanded, isMobile, toggle }) => (
  <div className="flex items-center justify-between p-4">
    {(expanded || isMobile) ? (      
      <IconButton icon={isMobile ? X : ChevronLeft} onClick={toggle} className='mx-auto' />      
    ) : (
      <IconButton icon={Menu} onClick={toggle} className="mx-auto" />
    )}
  </div>
);
