import "./Tasks.css";
export function Tasks({ children }) {
  return (
    <>
      <ul className="tasks">{children}</ul>
    </>
  );
}
