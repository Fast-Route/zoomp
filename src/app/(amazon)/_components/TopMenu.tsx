import { GiHamburgerMenu } from 'react-icons/gi';

interface TopMenuProps {
  onClick: () => void;
  text?: string;
}

function TopMenu({ onClick, text }: TopMenuProps) {
    return (
        <nav className="fixed bg-[var(--input-color)] h-[7vh] w-full p-4 flex justify-between items-center top-0 ">
        <GiHamburgerMenu onClick={ onClick } size={24} className="text-white" />
        <h1 className="text-white text-xl">{text}</h1>
        <div className="flex gap-6">
        </div>
      </nav>
    );
}

export default TopMenu;