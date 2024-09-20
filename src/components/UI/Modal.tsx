import React from 'react';
import classes from '../../assets/css/UI/Modal.module.css';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
  onclose: () => void;
};
type BackdropProps = {
  onClose: () => void;
};

type ModalOverlayProps = {
  children: React.ReactNode;
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ children, onclose }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onclose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
