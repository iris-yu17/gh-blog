import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log('---session', session);

  return (
    <html lang="en">
      <body className={`${inter.className} px-4`}>
        <div className="pt-16 pb-2 min-h-screen flex flex-col">
          <Header session={session} />
          {children}
        </div>
      </body>
    </html>
  );
}
