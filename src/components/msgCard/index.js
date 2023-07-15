import { memo } from "react";
import FromMsg from "./from";
import ToMsg from "./to";

const MsgCard = ({chat}) => {
    return (
        <>
            { chat?.from == true ?  <FromMsg {...chat} /> : <ToMsg {...chat} /> }
        </>
    )
}


export default memo(MsgCard);