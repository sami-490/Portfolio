'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
    // We only set auth to true if token exists and after render
    setIsAuthenticated(!!token);
  }, [router]);

  if (!isAuthenticated) return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1d21]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
    </div>
  );

  return <>{children}</>;
}
