import styles from "./ButtonTaskToggleStatus.module.css";
export function ButtonTaskToggleStatus({ onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        <i className="bi bi-check-circle"></i>
      </button>
    </>
  );
}
