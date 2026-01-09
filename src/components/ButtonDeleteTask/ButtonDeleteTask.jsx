import "./ButtonDeleteTask.css";
export function ButtonDeleteTask({ onClick }) {
  return (
    <>
      <button className="btn-deleteTask" onClick={onClick}>
        <i className="bi bi-trash-fill"></i>
      </button>
    </>
  );
}
