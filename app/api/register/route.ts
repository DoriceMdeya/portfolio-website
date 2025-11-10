import { NextResponse } from 'next/server' 
import { supabase } from '@/lib/supabase' 
 
export async function POST(request: Request) { 
  try { 
    const { email, password } = await request.json() 
 
    // Validate input 
    if (!email || !password) { 
      return NextResponse.json( 
        { error: 'Email and password are required' }, 
        { status: 400 } 
      ) 
    } 
 
    if (password.length < 6) { 
      return NextResponse.json( 
        { error: 'Password must be at least 6 characters' }, 
        { status: 400 } 
      ) 
    } 
 
    // Create user with Supabase Auth 
    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password, 
    }) 
 
    if (error) { 
      return NextResponse.json( 
        { error: error.message }, 
        { status: 400 } 
      ) 
    } 
 
    return NextResponse.json( 
      {  
        message: 'Registration successful!', 
        user: data.user  
      }, 
      { status: 201 } 
    ) 
 
  } catch (error) { 
    console.error('Registration error:', error) 
    return NextResponse.json( 
      { error: 'Internal server error' }, 
      { status: 500 } 
    ) 
} 
} 