import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
          <h1 className={styles.title}>Choose your animal</h1>
          <p className={styles.description}>What do you prefer? Fish, Bird, Rabbit? Or Rat?</p>
    </div>
  );
}
