import React from 'react'

import './modal.css'

const Modal = ({close, openModal}) => {
  if(!openModal) return null;

  return (
    <div className='modal__overlay'>
      <div className='modal__container'>
        
      </div>
    </div>
  )
}

export default Modal