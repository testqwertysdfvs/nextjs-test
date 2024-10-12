import React from "react";
import styles from "./page.module.css";
import {ContentIcon} from "@/features/ContentIcon";

export default function RatPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
            <ContentIcon iconName={'rat'} title={'Red Rat'} titleShort={'Rat'} />
            <div className={styles.container}>
                <div className={styles.item1}>1</div>
                <div className={styles.item2}>2</div>
                <div className={styles.item3}>3</div>
            </div>
            </div>
        </div>
    );
}
