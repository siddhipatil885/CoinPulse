'use client';
import { usePathname } from "next/navigation";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";


const Header = () => {
  const pathname = usePathname();
  return (
    <header className="border-b border-dark-400">
      <div className="main-container inner flex items-center">
        <Link href="/" className="flex items-center gap-3">
          
          <Image
            src="/logo.svg"
            alt="CoinPulse Logo"
            width={40}
            height={40}
          />

          <span className="text-2xl font-semibold text-purple-100">
            CoinPulse
          </span>

        </Link>

        <nav>
          <Link href='/' className={cn('nav-link', {
            'is-active': pathname==='/',
            'is-home': true
          })}> Home</Link>

          <p>Search Modal</p>
          <Link href="/coins" className={cn('nav-link', {
            'is-active': pathname==='/coins',
            
          })}>All Coins</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;