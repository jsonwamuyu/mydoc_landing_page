import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from './components/Hero';
import Services from './components/Services'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Provider from './components/Provider';
import Download from './components/Download'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>  <Navbar />
    <Hero />
    <Services />
    <Provider />
    <Download />
    <Footer />
    </>
  )
}
