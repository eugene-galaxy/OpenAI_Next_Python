import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <div className="flex space-x-3">
        <Link href="/" passHref className="flex items-center">
          <Image
            alt="Custom Logo"
            src="https://i.im.ge/2023/04/11/IBXuyY.EMDILOGO.png"
            className="object-contain"
            width={120}
            height={48}
          />
        </Link>
      </div>
      <Image
        alt="Vercel Icon"
        src="/vercelLogo.png"
        className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
        width={32}
        height={28}
      />
    </header>
  );
};

export default Header;
