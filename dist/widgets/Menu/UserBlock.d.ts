import React from "react";
interface Props {
    account?: string;
    activate: any;
    logout: () => void;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
