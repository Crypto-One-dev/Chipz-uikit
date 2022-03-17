import Metamask from "./icons/Metamask";
import WalletConnect from "./icons/WalletConnect";
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { Config } from "./types";

export const injected = new InjectedConnector({supportedChainIds: [56]})

export const walletconnect = new WalletConnectConnector({
  rpc: {
      56: 'https://bsc-dataseed.binance.org/'
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: walletconnect,
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
