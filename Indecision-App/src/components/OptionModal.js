import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen = {!!props.selectedOption}
            onRequestClose = {props.ClearSelectedOption}
            contenteLabel = "Selected option"
            closeTimeoutMS = {200}
            className = "modal"
        >
        <h3 className = "modal__title">Selected Option</h3>
        {props.selectedOption? <p className = "modal__body">{props.selectedOption}</p> : undefined}
        <button className = "button" onClick = {props.ClearSelectedOption}>Oki oki</button>
        </Modal>
    );
}

export default OptionModal;