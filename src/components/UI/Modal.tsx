import React from 'react';
import classes from '../../assets/css/UI/Modal.module.css';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
};
type BackdropProps = {};
type ModalOverlayProps = {
  children: React.ReactNode;
};

const Backdrop = ({}: BackdropProps) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
