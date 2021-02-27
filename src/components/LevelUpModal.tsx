import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>2</header>

        <strong>Congratulations</strong>
        <p>You've reached a new level</p>

        <button type="button">
          <img src="/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  );
}
