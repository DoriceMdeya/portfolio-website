'use client'; 
import { useState } from 'react'; 
import { useRouter } from 'next/navigation'; 
import Link from 'next/link'; 
export default function Register() { 
const [email, setEmail] = useState(''); 
const [password, setPassword] = useState(''); 
const [confirmPassword, setConfirmPassword] = useState(''); 
const [error, setError] = useState(''); 
const [loading, setLoading] = useState(false); 
const router = useRouter(); 
const handleSubmit = async (e: React.FormEvent) => { 
e.preventDefault(); 
setError(''); 
     
    if (password !== confirmPassword) { 
      setError('Passwords do not match'); 
      return; 
    } 
 
    if (password.length < 6) { 
      setError('Password must be at least 6 characters'); 
      return; 
    } 
 
    setLoading(true); 
 
    try { 
      const response = await fetch('/api/register', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({ email, password }), 
      }); 
 
      if (response.ok) { 
        router.push('/dashboard'); 
      } else { 
        const data = await response.json(); 
        setError(data.error || 'Registration failed'); 
      } 
    } catch (error) { 
      setError('An error occurred during registration'); 
    } finally { 
      setLoading(false); 
    } 
  }; 
 
  return ( 
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 
sm:px-6 lg:px-8"> 
      <div className="max-w-md w-full space-y-8"> 
        <div> 
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> 
            Create your account 
          </h2> 
          <p className="mt-2 text-center text-sm text-gray-600"> 
            Or{' '} 
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500"> 
              sign in to existing account 
            </Link> 
          </p> 
        </div> 
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}> 
          {error && ( 
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 
rounded"> 
              {error} 
            </div> 
          )} 
          <div> 
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> 
              Email address 
            </label> 
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 appearance-none relative block w-full px-3 py-2 border 
border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border
blue-500" 
              placeholder="Enter your email" 
            /> 
          </div> 
          <div> 
            <label htmlFor="password" className="block text-sm font-medium text-gray
700"> 
              Password 
            </label> 
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 appearance-none relative block w-full px-3 py-2 border 
border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border
blue-500" 
              placeholder="Enter your password (min. 6 characters)" 
            /> 
          </div> 
          <div> 
            <label htmlFor="confirmPassword" className="block text-sm font-medium text
gray-700"> 
              Confirm Password 
            </label> 
            <input 
              id="confirmPassword" 
              name="confirmPassword" 
              type="password" 
              required 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="mt-1 appearance-none relative block w-full px-3 py-2 border 
border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border
blue-500" 
              placeholder="Confirm your password" 
            /> 
          </div> 
          <div> 
            <button 
              type="submit" 
              disabled={loading} 
              className="group relative w-full flex justify-center py-2 px-4 border border
transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue
700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
disabled:opacity-50" 
            > 
              {loading ? 'Creating account...' : 'Create account'} 
            </button> 
          </div> 
        </form> 
      </div> 
    </div> 
  ); 
} 