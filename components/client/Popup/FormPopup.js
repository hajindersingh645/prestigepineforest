"use client";
import React from "react";
import Modal from "react-modal";
import LeadForm from "../LeadForm";
import { X } from "lucide-react";

const FormPopup = ({ isOpen, onClose, onRequestClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="fixed inset-0 flex items-center justify-center p-4 z-40"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-30"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
          <div className="flex justify-end items-center mb-2 absolute -top-3 -right-3 rounded-full text-white">
            <button onClick={onClose} className="p-2 bg-red-600 rounded-full w-10 h-10 flex justify-center items-center">
              <X size={40} />
            </button>
          </div>
          <p className="form-heading text-black text-2xl text-center mb-5 font-semibold">
            {`Register here and Avail the `} <span className="text-red-600">Best Offers!!</span>
          </p>
          <LeadForm buttonLabel="Submit" />
        </div>
      </Modal>
    </>
  );
};

export default FormPopup;
