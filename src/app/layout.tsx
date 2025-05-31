import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 px-6 py-4">
      <Contact />
    </footer>
  )
}

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samin Bin Karim | Portfolio',
  description: 'Personal Portfolio of Samin Bin Karim',
  keywords: ['Samin Bin Karim', 'Portfolio', 'Controls Engineer', 'Machine Learning Engineer', 'Software Engineer'],
  icons: {
    icon: '/favicon.ico', // Adjust the path if your icon is elsewhere
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
