import "./Task.css";
export function Task({ task }) {
  return (
    <>
      <li className="task">{task.title}</li>
    </>
  );
}
