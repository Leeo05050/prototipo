import styles from "./card.module.css";

export default function Card({children}: any) {
  return (
    <div className={styles.cardBg}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  );
}
