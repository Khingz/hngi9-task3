import React from 'react';
import meta_icon from '../../assets/icons/metamask_modal.svg';
import wallet from '../../assets/icons/wallet_modal.svg';
import { HiOutlineX, HiChevronRight } from 'react-icons/hi';

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
        <div className="modal__title">
          <p>Connect Wallet</p>
          <i>
            <HiOutlineX onClick={close} />
          </i>
        </div>
        <div className="modal__body">
          <p>Choose your preffered wallet:</p>
          <button>
            <div className="modal__brand">
              <img src={meta_icon} alt="meta" />
              Metamask
            </div>
            <HiChevronRight />
          </button>
          <button>
            <div className="modal__brand">
              <img src={wallet} alt="wallet" />
              WalletConnect
            </div>
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
