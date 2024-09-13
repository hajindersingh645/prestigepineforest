import React from 'react';
import { X, Phone } from 'lucide-react';

const MobileNavigation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-4 mt-8">
        <a href="#" className="text-xl text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-xl text-gray-600 hover:text-gray-900">Listings</a>
        <a href="#" className="text-xl text-gray-600 hover:text-gray-900">About</a>
        <a href="#" className="text-xl text-gray-600 hover:text-gray-900">Contact</a>
      </nav>
      <div className="mt-auto mb-8 flex justify-center">
        <a href="tel:+1234567890" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center text-lg">
          <Phone size={24} className="mr-2" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;