'use client'; 
import { useEffect, useState } from 'react'; 
import { useRouter } from 'next/navigation'; 
import Link from 'next/link'; 
interface User { 
id: string; 
email: string; 
} 
export default function Dashboard() { 
const [user, setUser] = useState<User | null>(null); 
const [loading, setLoading] = useState(true); 
const router = useRouter(); 
useEffect(() => { 
checkAuthStatus(); 
  }, []); 
 
  const checkAuthStatus = async () => { 
    try { 
      const response = await fetch('/api/auth/status'); 
       
      if (response.ok) { 
        const data = await response.json(); 
        if (data.authenticated && data.user) { 
          setUser(data.user); 
        } else { 
          router.push('/login'); 
        } 
      } else { 
        router.push('/login'); 
      } 
    } catch (error) { 
      console.error('Auth check error:', error); 
      router.push('/login'); 
    } finally { 
      setLoading(false); 
    } 
  }; 
 
  const handleLogout = async () => { 
    try { 
      await fetch('/api/auth/logout', { method: 'POST' }); 
      router.push('/'); 
    } catch (error) { 
      console.error('Logout error:', error); 
    } 
  }; 
 
  if (loading) { 
    return ( 
      <div className="min-h-screen bg-gray-50 flex items-center justify-center"> 
        <div className="text-xl">Loading your dashboard...</div> 
      </div> 
    ); 
  } 
 
  return ( 
    <div className="min-h-screen bg-gray-50"> 
      {/* Header */} 
      <header className="bg-white shadow"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="flex justify-between items-center py-6"> 
            <div> 
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> 
              <p className="text-gray-600">Welcome to your personal space</p> 
            </div> 
            <div className="flex items-center space-x-4"> 
              <span className="text-gray-700">Hello, {user?.email}</span> 
              <button 
                onClick={handleLogout} 
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 
transition" 
              > 
                Logout 
              </button> 
            </div> 
          </div> 
        </div> 
      </header> 
 
      {/* Main Content */} 
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> 
        <div className="px-4 py-6 sm:px-0"> 
          {/* Welcome Section */} 
          <div className="bg-white overflow-hidden shadow rounded-lg mb-8"> 
            <div className="px-4 py-5 sm:p-6"> 
              <h2 className="text-2xl font-bold text-gray-800 mb-4"> 
                Welcome to Your Dashboard, Dorice! 
              </h2> 
              <p className="text-gray-600 mb-4"> 
                This is your protected dashboard area. Here you can manage your portfolio,  
                view analytics, and access exclusive content. 
              </p> 
            </div> 
          </div> 
 
          {/* Dashboard Grid */} 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {/* Profile Card */} 
            <div className="bg-white overflow-hidden shadow rounded-lg"> 
              <div className="p-6"> 
                <div className="flex items-center"> 
                  <div className="flex-shrink-0"> 
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify
center text-white font-bold"> 
                      DG 
                    </div> 
                  </div> 
                  <div className="ml-4"> 
                    <h3 className="text-lg font-medium text-gray-900">Your Profile</h3> 
                    <p className="text-sm text-gray-500">Manage your account</p> 
                  </div> 
                </div> 
                <div className="mt-4"> 
                  <p className="text-sm text-gray-600"> 
                    Email: {user?.email} 
                  </p> 
                </div> 
              </div> 
            </div> 
 
            {/* Portfolio Stats */} 
            <div className="bg-white overflow-hidden shadow rounded-lg"> 
              <div className="p-6"> 
                <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio Stats</h3> 
                <div className="space-y-3"> 
                  <div className="flex justify-between"> 
                    <span className="text-gray-600">Projects</span> 
                    <span className="font-semibold">3</span> 
                  </div> 
                  <div className="flex justify-between"> 
                    <span className="text-gray-600">Skills</span> 
                    <span className="font-semibold">6</span> 
                  </div> 
                  <div className="flex justify-between"> 
                    <span className="text-gray-600">Visitors</span> 
                    <span className="font-semibold">1.2K</span> 
                  </div> 
                </div> 
              </div> 
            </div> 
 
            {/* Quick Actions */} 
            <div className="bg-white overflow-hidden shadow rounded-lg"> 
              <div className="p-6"> 
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3> 
                <div className="space-y-3"> 
                  <Link  
                    href="/"  
                    className="block w-full text-left px-4 py-2 bg-blue-50 text-blue-700 rounded
lg hover:bg-blue-100 transition" 
                  > 
                    View Public Portfolio 
                  </Link> 
                  <button className="block w-full text-left px-4 py-2 bg-green-50 text-green-700 
rounded-lg hover:bg-green-100 transition"> 
                    Edit Portfolio 
                  </button> 
                  <button className="block w-full text-left px-4 py-2 bg-purple-50 text-purple
700 rounded-lg hover:bg-purple-100 transition"> 
                    View Analytics 
                  </button> 
                </div> 
              </div> 
            </div> 
          </div> 
 
          {/* Recent Activity */} 
          <div className="mt-8 bg-white shadow rounded-lg"> 
            <div className="px-4 py-5 sm:p-6"> 
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3> 
              <div className="space-y-4"> 
                <div className="flex items-center space-x-3"> 
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div> 
                  <span className="text-gray-600">You logged in successfully</span> 
                  <span className="text-gray-400 text-sm">Just now</span> 
                </div> 
                <div className="flex items-center space-x-3"> 
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div> 
                  <span className="text-gray-600">Welcome to your new dashboard</span> 
                  <span className="text-gray-400 text-sm">Today</span> 
                </div> 
              </div> 
</div> 
</div> 
</div> 
</main> 
</div> 
); 
}