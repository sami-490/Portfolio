'use client';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

export default function AdminDashboard() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#1a1d21] text-white p-6 md:p-10 pt-24 md:pt-32 relative z-[60]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Admin <span className="text-teal-400">Dashboard</span></h1>
              <p className="text-gray-400 mt-2">Manage your portfolio content securely.</p>
            </div>
            <button 
              onClick={() => {
                localStorage.removeItem('adminToken');
                window.location.href = '/admin/login';
              }}
              className="bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dashboard Cards */}
            <div className="bg-[#24272c] p-8 rounded-2xl border border-gray-800 hover:border-teal-400/50 transition-colors group shadow-lg">
              <h2 className="text-xl font-bold mb-3 text-white">Manage Projects</h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">Add new projects, update existing ones, or remove outdated work.</p>
              <button className="text-teal-400 text-sm font-bold uppercase tracking-widest group-hover:text-teal-300">Coming soon &rarr;</button>
            </div>
            
            <div className="bg-[#24272c] p-8 rounded-2xl border border-gray-800 hover:border-teal-400/50 transition-colors group shadow-lg">
              <h2 className="text-xl font-bold mb-3 text-white">Manage Blogs</h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">Write, publish, or edit your blog articles and tech insights.</p>
              <button className="text-teal-400 text-sm font-bold uppercase tracking-widest group-hover:text-teal-300">Coming soon &rarr;</button>
            </div>
            
            <div className="bg-[#24272c] p-8 rounded-2xl border border-gray-800 hover:border-teal-400/50 transition-colors group shadow-lg">
              <h2 className="text-xl font-bold mb-3 text-white">Manage Certificates</h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">Upload new certifications and courses you have completed.</p>
              <button className="text-teal-400 text-sm font-bold uppercase tracking-widest group-hover:text-teal-300">Coming soon &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}