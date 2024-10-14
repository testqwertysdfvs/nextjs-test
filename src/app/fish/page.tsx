import React from "react";
import styles from "./page.module.css";
import {ContentIcon} from "@/widgets/ContentIcon";

export default function RatPage() {
    return (
        <div className={styles.wrapper}>
                <ContentIcon iconName={'fish'} title={'Alarm Clock Fish'} titleShort={'Fish'} />
        </div>
    );
}
