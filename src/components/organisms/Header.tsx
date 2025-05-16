import { HeaderLeft } from '../molecules/HeaderLeft';
import { HeaderRight } from '../molecules/HeaderRight';

interface HeaderProps {
  title?: string;
  appName?: string;
  logo?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, appName, logo }) => {
  return (
    <header className="py-3 px-4 md:py-4 md:px-6 flex items-center justify-between sticky top-0 z-20">
      <HeaderLeft title={title} />
      <HeaderRight appName={appName} logo={logo} />
    </header>
  );
};

export default Header;
