// components/ModalContent.js
import React from "react";

const ModalContent = ({ onClose }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
      <p className="text-gray-700 mb-4">
        This is an example of a modal using react-modal and Tailwind CSS.
      </p>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Close Modal
      </button>
    </>
  );
};

export default ModalContent;
