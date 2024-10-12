import Link from 'next/link'
import styles from "@/app/page.module.css";

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Not Found</h1>
            <p className={styles.description}>Could not find requested resource</p>
            <Link className={styles.link} href="/">Return Home</Link>
        </div>
    )
}
