
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/adminpannel/dashboard');
  }, [router]);

  return null;
};

export default HomePage;
