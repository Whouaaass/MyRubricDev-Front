interface AvatarProps {
  logo?: React.ReactNode;
  appName?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ logo, appName }) => (
  <div className="w-8 h-8 bg-gray-300 rounded-md overflow-hidden flex items-center justify-center">
    {logo || <span className="font-bold">{appName?.charAt(0) || 'A'}</span>}
  </div>
);
