import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default layout;
