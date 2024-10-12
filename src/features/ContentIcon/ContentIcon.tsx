import React, {FC} from 'react';
import { Fish, Bird, Rabbit, Rat } from "lucide-react";

import styles from './ContentIcon.module.css';

interface Props {
    iconName: 'fish' | 'bird' | 'rabbit' | 'rat';
    title: string;
    titleShort: string;
}

export const ContentIcon: FC<Props> = ({
                                           iconName,
    title,
                                           titleShort
                                       }) => {

    let icon;

    switch (iconName) {
        case "fish":
            icon = <Fish size={80}/>;
            break;
        case "bird":
            icon = <Bird size={80}/>;
            break;
        case "rabbit":
            icon = <Rabbit size={80}/>;
            break;
        case "rat":
            icon = <Rat size={80}/>;
            break;
    }

    return <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.titleShort}>{titleShort}</h1>
        {icon}
    </div>
};
