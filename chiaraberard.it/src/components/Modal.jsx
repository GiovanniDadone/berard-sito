import React from "react";
import "./Modal.css";

const Modal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Chiudi"
        >
          ×
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img
              src={item.image}
              alt={item.title}
              className="modal-image-display"
            />
          </div>
          <div className="modal-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;