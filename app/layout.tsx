import type { Metadata } from 'next'; 
import { Inter } from 'next/font/google'; 
import './globals.css'; 
 
const inter = Inter({ subsets: ['latin'] }); 
 
export const metadata: Metadata = { 
  title: 'Dorice George - Web Developer', 
  description: 'Portfolio of Dorice George, a professional web developer', 
}; 
 
export default function RootLayout({ 
  children, 
}: { 
children: React.ReactNode; 
}) { 
return ( 
<html lang="en"> 
<body className={inter.className}> 
{children} 
</body> 
</html> 
); 
}