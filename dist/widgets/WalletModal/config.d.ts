import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { Config } from "./types";
export declare const injected: InjectedConnector;
export declare const walletconnect: WalletConnectConnector;
declare const connectors: Config[];
export default connectors;
export declare const localStorageKey = "accountStatus";
