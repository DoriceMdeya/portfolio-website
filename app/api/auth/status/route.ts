import { NextResponse } from 'next/server' 
import { supabase } from '@/lib/supabase' 
 
export async function GET() { 
  try { 
    const { data: { session }, error } = await supabase.auth.getSession() 
 
    if (error) { 
      return NextResponse.json( 
        { error: error.message }, 
        { status: 401 } 
      ) 
    } 
 
    return NextResponse.json( 
      {  
        authenticated: !!session, 
        user: session?.user || null 
      }, 
      { status: 200 } 
    ) 
 
  } catch (error) { 
    return NextResponse.json( 
      { error: 'Internal server error' }, 
      { status: 500 } 
    ) 
} 
}