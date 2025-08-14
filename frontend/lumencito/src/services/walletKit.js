// walletKit.js
import {
  StellarWalletsKit,
  WalletNetwork,
  FreighterModule,
  xBullModule,
} from "@creit.tech/stellar-wallets-kit";

// Creamos la instancia con la red y los módulos que queremos soportar
export const walletKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET, // o WalletNetwork.PUBLIC si usás red principal
  selectedWalletId: null, // sin wallet seleccionada al inicio
  modules: [new FreighterModule(), new xBullModule()],
});
