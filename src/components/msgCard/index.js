import { memo } from "react";
import FromMsg from "./from";
import ToMsg from "./to";

const MsgCard = ({chat, self, chattingWith}) => {
    return (
        <>
            { chat?.from == self ?  <FromMsg {...chat} /> : <ToMsg {...chat} /> }
        </>
    )
}


export default memo(MsgCard);