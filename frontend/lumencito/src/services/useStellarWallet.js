import { useState } from "react";
import { walletKit } from "./walletKit";

export const useStellarWallet = () => {
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    try {
      await walletKit.openModal({
        onWalletSelected: async (option) => {
          walletKit.setWallet(option.id);
          const { address } = await walletKit.getAddress();
          setAddress(address);
        },
      });
    } catch (err) {
      setError(err.message || "Error al conectar la wallet");
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setError(null);
    walletKit.setWallet(null);
  };

  return { address, error, connectWallet, disconnectWallet };
};
