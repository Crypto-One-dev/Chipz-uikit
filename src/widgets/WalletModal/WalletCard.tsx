import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  activate: any;
  connector: any;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ activate, connector, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  console.log("activate:", activate, connector);
  return (
    <Button
      fullWidth
      variant="primary"
      onClick={() => {
        activate(connector);
        window.localStorage.setItem(localStorageKey, "1");
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="white" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
