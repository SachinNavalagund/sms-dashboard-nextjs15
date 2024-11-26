import React, { ReactNode } from 'react';
import './globals.css';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="bg-[#FDFDFD]">{children}</body>
    </html>
  );
};

export default RootLayout;
