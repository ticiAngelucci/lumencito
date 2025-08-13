// src/components/DonateModal.jsx
import React, { useState } from 'react';

const DonateModal = ({ isOpen, onClose, project, onDonate }) => {
  const [amount, setAmount] = useState('');

  if (!isOpen || !project) return null;

  const handleDonate = () => {
    if (!amount) return;
    onDonate(amount);
    setAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <h3 className="text-2xl font-bold mb-4">Donar a: {project.title}</h3>
        <input
          type="number"
          placeholder="Monto a donar"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <div className="flex gap-4">
          <button
            onClick={handleDonate}
            className="bg-gradient-to-r from-lumen-orange to-lumen-red text-white px-4 py-2 rounded-lg"
          >
            Donar
          </button>
          <button
            onClick={onClose}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
