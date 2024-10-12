import React from "react";
import { Rat } from "lucide-react";
import styles from "./page.module.css";

export default function RatPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
            <h1>Rat</h1>
            <Rat size={80}/>
            <div className={styles.container}>
                <div className={styles.item1}>1</div>
                <div className={styles.item2}>2</div>
                <div className={styles.item3}>3</div>
            </div>
            </div>
        </div>
    );
}
