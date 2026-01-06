import "./ButtonFAB.css";
export function ButtonFAB({ onClick }) {
  return (
    <>
      <button className="btn-fab" onClick={onClick}>
        <i className="bi bi-plus"></i>
      </button>
    </>
  );
}
