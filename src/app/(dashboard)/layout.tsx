import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import Logo from '../../../public/logo.png';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      {/* Left */}
      <div className="w-[14%] bg-[#FAFAFA] p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src={Logo} alt="logo" width={32} height={32} />
          <span className="hidden text-lg font-bold text-zinc-800 lg:block">
            KLE IT
          </span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className="w-[86%] overflow-scroll md:w-[92%] lg:w-[84%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
