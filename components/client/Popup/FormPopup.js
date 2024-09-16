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
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex justify-end items-center mb-4">
            <button onClick={onClose}>
              <X size={40} className="text-primary" />
            </button>
          </div>
          <p className="form-heading text-black text-3xl  text-center mb-5 font-semibold">
            Enquire Now!
          </p>
          <LeadForm buttonLabel="Submit" />
        </div>
      </Modal>
    </>
  );
};

export default FormPopup;
