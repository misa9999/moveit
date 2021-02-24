import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div />
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Start a cycle to receive challenges to be completed</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
