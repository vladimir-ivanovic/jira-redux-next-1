'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Index from './pages/index'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Index />
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
