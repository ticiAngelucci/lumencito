import React, { useState, useEffect } from 'react';
import { useStellarWallet } from '../services/useStellarWallet';

const DonateModal = ({ isOpen, onClose, project }) => {
  const { address, connectWallet } = useStellarWallet();
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [message, setMessage] = useState('');
  const [donated, setDonated] = useState(false);
  const [donationPending, setDonationPending] = useState(false);

  const predefinedAmounts = [5, 10, 15, 25, 50];

  useEffect(() => {
    if (!project) return;
    const currentAmount = selectedAmount || amount;
    setMessage(
      currentAmount
        ? `Vas a donar $${currentAmount} al proyecto "${project.title}".`
        : ''
    );
  }, [selectedAmount, amount, project]);

  useEffect(() => {
    if (donationPending && address) {
      setDonated(true);
      setDonationPending(false);
    }
  }, [address, donationPending]);

  const handleDonate = async () => {
    if (!project) return;
    const donation = Number(selectedAmount || amount);
    if (!donation || donation <= 0) return;

    if (!address) {
      try {
        await connectWallet();
        setDonationPending(true); 
        return;
      } catch (err) {
        console.error('Error conectando wallet:', err);
        return;
      }
    }

    setDonated(true);
  };

  const handleClose = () => {
    setAmount('');
    setSelectedAmount(null);
    setMessage('');
    setDonated(false);
    setDonationPending(false);
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
          {donated ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Gracias por tu aporte!</h3>
              <p className="text-gray-700 mb-4">
                Has donado <strong>${selectedAmount || amount}</strong> al proyecto <strong>"{project.title}"</strong>.
              </p>
              <p className="text-gray-600">
                Tu contribución está siendo procesada y pronto aparecerá reflejada en la comunidad Stellar DAO.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 px-6 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
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
                    className={`flex-1 py-2 rounded-lg font-semibold text-white text-center transition-transform ${
                      selectedAmount === amt
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 scale-105'
                        : 'bg-gradient-to-r from-orange-400 to-red-500 hover:scale-105'
                    }`}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
