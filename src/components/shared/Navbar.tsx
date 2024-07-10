"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarProps } from '@/helpers/types';

const Tab = ({ href, label, isActive, onClick }:NavbarProps) => {
  return (
    <Link href={href}>
    <motion.div
      className="relative z-40 cursor-pointer"
      onClick={() => onClick(href)}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-green-200 z-0 rounded-md"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <div
        className={`py-2 px-4 rounded-md text-sm font-medium relative ${
          isActive ? 'text-green-900' : 'text-gray-600'
        }`}
        style={{
          backgroundColor: isActive ? '' : 'transparent',
          borderBottom: isActive ? '' : 'none',
        }}
      >{label}
      </div>
      
    </motion.div>
    </Link>
    
  );
};

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('/adminpannel');
  const pathname = usePathname()

  const handleTabClick = (href:string) => {
    setActiveTab(href);
  };

  return (
    <div className="flex justify-center items-center">
      <nav className="flex justify-between items-center gap-4 shadow-lg rounded-md p-4">
        <Tab
          href="/adminpannel/dashboard"
          label="Admin Panel"
          isActive={pathname.includes('/adminpannel')}
          onClick={handleTabClick}
        />
        <Tab
          href="/mainstore"
          label="MainStore"
          isActive={activeTab === '/mainstore'}
          onClick={handleTabClick}
        />
      </nav>
    </div>
  );
};

export default Navbar;
