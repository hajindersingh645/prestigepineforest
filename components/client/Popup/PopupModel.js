import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="fixed inset-0 flex items-center justify-center p-4 z-40"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-30"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
