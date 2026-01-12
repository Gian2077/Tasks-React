import "./ButtonEditTask.css";
export function ButtonEditTask({ onClick }) {
  return (
    <>
      <button className="btn-editTask" onClick={onClick}>
        <i className="bi bi-pencil"></i>
      </button>
    </>
  );
}
