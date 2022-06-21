import React, { Fragment, ReactNode } from "react";

import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface IModalProps {
    onClose?: () => void;
    children?: ReactNode;
}

const Backdrop: React.FC<IModalProps> = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay: React.FC<IModalProps> = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<IModalProps> = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
