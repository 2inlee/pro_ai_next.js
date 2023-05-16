import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI system',
  description: 'Powerd by ChatGPT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header></Header>
      {children}
      <Footer></Footer>
      </body>
    </html>
  )
}
