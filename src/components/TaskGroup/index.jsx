import { EmptyState } from "../EmptyState";
import { Tasks } from "../Tasks";
import styles from "./TaskGroup.module.css";
export function TaskGroup({ title, tasks }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <Tasks>
        {tasks}
        {tasks.length === 0 && <EmptyState />}
      </Tasks>
    </section>
  );
}
