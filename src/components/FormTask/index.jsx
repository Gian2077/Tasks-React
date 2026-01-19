import styles from "./FormTask.module.css";
export function FormTask({ onSubmit, defaultValue }) {
  return (
    <>
      <form action={onSubmit} className={styles.form}>
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
