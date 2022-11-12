import React from 'react';

import './modal.css';

const Modal = ({ close, openModal }) => {
  if (!openModal) return null;

  return (
    <div className="modal__overlay" onClick={close}>
      <div
        className="modal__container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p onClick={close}>X</p>
        Hello world
      </div>
    </div>
  );
};

export default Modal;
