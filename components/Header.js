import Link from 'next/link';
import Logo from '../assets/logo.svg';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-6 text-center">
      <Image
        src={Logo}
        alt="Sharon Springs Logo"
        layout="fixed"
        width={120}
        height={120}
      />
      <p className="text-2xl dark:text-white text-indigo-900 font-bold pb-2 text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
