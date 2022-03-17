import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export type ConnectorId =
  | "authereum"
  | "fortmatic"
  | "frame"
  | "injected"
  | "portis"
  | "squarelink"
  | "torus"
  | "walletconnect"
  | "walletlink"
  | "bsc";


export type Login = (connectorId: any) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: any;
}
