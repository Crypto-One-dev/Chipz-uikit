interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (activate: any, logout: () => void, account?: string | undefined) => ReturnType;
export default useWalletModal;
