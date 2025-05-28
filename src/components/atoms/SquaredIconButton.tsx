import type { LucideIcon } from 'lucide-react';

interface SquaredIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  badge?: boolean;
  iconStyle?: string;
  hiddenOnMobile?: boolean;
}

export const SquaredIconButton: React.FC<SquaredIconButtonProps> = ({ icon: Icon, iconStyle, badge, className = '', hiddenOnMobile, ...props }) => (
  <button
    className={`p-2 rounded-sm hover:opacity-80 relative ${hiddenOnMobile ? 'hidden sm:block' : ''} ${className}`}
    {...props}
  >
    <Icon size={20} />
    {badge && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />}
  </button>
);
