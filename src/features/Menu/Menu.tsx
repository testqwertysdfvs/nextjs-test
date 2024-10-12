import React from 'react';

import { Fish, Bird, Rabbit, Rat } from "lucide-react";

import styles from './Menu.module.css';
import Link from "next/link";

export const Menu = () => {
    return <div className={styles.wrapper}>
        <Link href={'/fish'} className={styles.item}><Fish size={32} /> <p>Fish</p></Link>
        <Link href={'/bird'} className={styles.item}><Bird size={32} /> <p>Bird</p></Link>
        <Link href={'/rabbit'} className={styles.item}><Rabbit size={32} /> <p>Rabbit</p></Link>
        <Link href={'/rat'} className={styles.item}><Rat size={32}/> <p>Rat</p></Link>
    </div>
};
