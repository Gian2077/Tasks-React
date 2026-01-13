import "./ButtonTaskToggleStatus.css";
export function ButtonTaskToggleStatus({ onClick }) {
  return (
    <>
      <button className="btn-toggleTask" onClick={onClick}>
        <i className="bi bi-check-circle"></i>
      </button>
    </>
  );
}
