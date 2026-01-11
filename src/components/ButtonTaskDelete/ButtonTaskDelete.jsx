import "./ButtonTaskDelete.css";
export function ButtonTaskDelete({ onClick }) {
  return (
    <>
      <button className="btn-deleteTask" onClick={onClick}>
        <i className="bi bi-trash-fill"></i>
      </button>
    </>
  );
}
