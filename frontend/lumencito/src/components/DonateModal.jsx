import React, { useState, useEffect } from 'react';

const DonateModal = ({ isOpen, onClose, project, onDonate }) => {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [message, setMessage] = useState('');

  const predefinedAmounts = [5, 10, 15, 25, 50];

  useEffect(() => {
    if (!project) return;
    const currentAmount = selectedAmount || amount;
    if (currentAmount) {
      setMessage(`Vas a donar $${currentAmount} al proyecto "${project.title}".`);
    } else {
      setMessage('');
    }
  }, [selectedAmount, amount, project]);

  const handleDonate = () => {
    if (!project) return;
    const donation = Number(selectedAmount || amount);
    if (!donation || donation <= 0) return;
    alert(`¡Felicidades! Has donado $${donation} a "${project.title}" 🎉`);
    setAmount('');
    setSelectedAmount(null);
    setMessage('');
    onClose();
  };

  const handleClose = () => {
    setAmount('');
    setSelectedAmount(null);
    setMessage('');
    onClose();
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Donar a:</h3>
          <p className="text-gray-700 font-semibold mb-4">{project.title}</p>

          <p className="text-gray-600 mb-2">Selecciona un monto:</p>
          <div className="flex flex-wrap gap-3 mb-2">
            {predefinedAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => {
                  setSelectedAmount(amt);
                  setAmount('');
                }}
                className={`flex-1 py-2 rounded-lg font-semibold text-white transition-transform text-center 
                  ${selectedAmount === amt ? 'bg-gradient-to-r from-orange-500 to-red-600 scale-105' 
                  : 'bg-gradient-to-r from-orange-400 to-red-500 hover:scale-105'}`}
              >
                ${amt}
              </button>
            ))}
          </div>

          <p className="text-gray-600 mb-2 text-center">O ingresa otro monto:</p>
          <input
            type="number"
            placeholder="Monto personalizado"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          {message && <p className="text-center text-gray-700 font-medium">{message}</p>}

          <div className="flex gap-4 mt-2">
            <button
              onClick={handleDonate}
              className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Donar
            </button>
            <button
              onClick={handleClose}
              className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
