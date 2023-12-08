"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Navigator from '@/components/sections/Navigator/Navigator';

export default function Home() {
  return (
    <main className={styles.main}>
        <Navigator/>
    </main>
  );
}
