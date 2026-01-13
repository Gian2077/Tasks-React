import "./ButtonTaskEdit.css";
export function ButtonTaskEdit({ onClick }) {
  return (
    <>
      <button className="btn-editTask" onClick={onClick}>
        <i className="bi bi-pencil"></i>
      </button>
    </>
  );
}
