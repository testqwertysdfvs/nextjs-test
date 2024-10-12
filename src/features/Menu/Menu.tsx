'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Fish, Bird, Rabbit, Rat } from "lucide-react";
import styles from './Menu.module.css';
import Link from "next/link";

export const Menu = () => {
    const pathname = usePathname();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href={'/fish'} className={`${styles.item} ${pathname === '/fish' ? styles.active : ''}`}>
                    <Fish size={32} /> <p>Fish</p>
                </Link>
                <Link href={'/bird'} className={`${styles.item} ${pathname === '/bird' ? styles.active : ''}`}>
                    <Bird size={32} /> <p>Bird</p>
                </Link>
                <Link href={'/rabbit'} className={`${styles.item} ${pathname === '/rabbit' ? styles.active : ''}`}>
                    <Rabbit size={32} /> <p>Rabbit</p>
                </Link>
                <Link href={'/rat'} className={`${styles.item} ${pathname === '/rat' ? styles.active : ''}`}>
                    <Rat size={32}/> <p>Rat</p>
                </Link>
            </div>
        </div>
    );
};
