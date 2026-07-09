'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        router.push('/admin');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Make sure your backend is running.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1d21] pt-20">
      <form onSubmit={handleLogin} className="bg-[#24272c] p-8 rounded-xl shadow-2xl border border-gray-800 w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center tracking-tight">Admin Login</h1>
        
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2 uppercase tracking-widest font-medium">Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#16181b] border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-teal-400 transition-colors"
            required
          />
        </div>
        
        <div className="mb-8">
          <label className="block text-gray-400 text-sm mb-2 uppercase tracking-widest font-medium">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#16181b] border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-teal-400 transition-colors"
            required
          />
        </div>
        
        <button type="submit" className="w-full bg-teal-400 hover:bg-teal-300 text-black font-bold py-3 rounded-lg transition-colors tracking-widest uppercase">
          Secure Login
        </button>
      </form>
    </div>
  );
}
