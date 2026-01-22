import styles from "./FormTask.module.css";
export function FormTask({ onSubmit, defaultValue }) {
  return (
    <>
      <form action={onSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.radio}>
            <input type="radio" name="type" id="daily" value="daily" required />
            <label htmlFor="daily">Daily</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="type" id="weekly" value="weekly" />
            <label htmlFor="weekly">Weekly</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="type" id="monthly" value="monthly" />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="type" id="yearly" value="yearly" />
            <label htmlFor="yearly">Yearly</label>
          </div>
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={defaultValue}
          />
        </div>
        <button className={styles.btn}>Add Task</button>
      </form>
    </>
  );
}
