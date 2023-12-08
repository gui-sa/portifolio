"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Navigator from '@/components/sections/Navigator/Navigator';
import { useRouter } from 'next/router';

export default function Multiverso() {
  return (
    <main className={styles.main}>
        <Navigator navList={1}/>
    </main>
  );
}