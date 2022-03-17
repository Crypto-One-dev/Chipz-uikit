import React from "react";
import { Config } from "./types";
interface Props {
    walletConfig: Config;
    activate: any;
    connector: any;
    onDismiss: () => void;
    mb: string;
}
declare const WalletCard: React.FC<Props>;
export default WalletCard;
