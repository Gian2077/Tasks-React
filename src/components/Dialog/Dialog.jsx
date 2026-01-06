import React, { useEffect, useRef } from "react";
import "./Dialog.css";
export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);
  const openDialog = () => {
    dialogRef.current.showModal();
  };
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <dialog className="dialog" ref={dialogRef}>
        <div className="dialog-header">
          <button className="btn-close" onClick={onClose}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="dialog-body">{children}</div>
      </dialog>
    </>
  );
}
