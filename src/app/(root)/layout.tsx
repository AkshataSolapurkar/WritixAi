// src/app/Layout.tsx

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/shared/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='m-[20px]'>
      <Navbar/>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default Layout;
