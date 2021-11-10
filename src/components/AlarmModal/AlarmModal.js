import React from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import "./AlarmModal.scss";

const AlarmModal = ({ alarmModalIsOpen, handleCloseModal, hours, minutes }) => {
  return (
    <div>
      <Modal
        isOpen={alarmModalIsOpen}
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        className="alarm-modal"
      >
        <div className="alarm-modal__content">
          <p className="alarm-modal__content-text">
            {hours}:{minutes}
          </p>
          <Button onClick={handleCloseModal}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default AlarmModal;
