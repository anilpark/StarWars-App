import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import './Modal.css';
import React from "react";
import clsx from "clsx";

ReactModal.setAppElement('#root');

function Modal({ children, className, isOpen, onRequestClose, ...modalProps }) {
  return (
    <ReactModal
      {...modalProps}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={clsx('modal', className)}
      overlayClassName="modal-overlay"
    >
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Modal;
