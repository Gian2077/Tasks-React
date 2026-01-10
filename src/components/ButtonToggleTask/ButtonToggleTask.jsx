import "./ButtonToggleTask.css";
export function ButtonToggleTask({ onClick }) {
  return (
    <>
      <button className="btn-toggleTask" onClick={onClick}>
        <i className="bi bi-check-circle"></i>
      </button>
    </>
  );
}
