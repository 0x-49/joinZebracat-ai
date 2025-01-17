import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import '@/styles/globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}