import type { LucideIcon } from 'lucide-react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  badge?: boolean;
  hiddenOnMobile?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, badge, className = '', hiddenOnMobile, ...props }) => (
  <button
    className={`p-2 rounded-full hover:bg-gray-100 relative ${hiddenOnMobile ? 'hidden sm:block' : ''} ${className}`}
    {...props}
  >
    <Icon size={20} className="text-gray-600" />
    {badge && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />}
  </button>
);
