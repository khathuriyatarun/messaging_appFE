import { memo } from "react";
import { formateDateTimeforChats } from "../../utils/dateTime";
import DisplayPicture from "../DisplayPicture";

const ListCard = ({chatDetails, clickEvent}) => {
    return(
        <div onClick={() => clickEvent({ id: chatDetails.id, name : chatDetails.name })} className="flex justify-between items-center h-[70px] max-w-[500px] rounded-[60px] px-4 mx-2 cursor-pointer transition-all hover:bg-[#3ab4f233]">
            <DisplayPicture user={{name : chatDetails?.name, display : chatDetails?.display}} />
            <div className="flex flex-auto overflow-hidden whitespace-nowrap flex-col justify-center h-full text-[#333] text-sm px-3">
                <h6 className="font-bold">{chatDetails.name}</h6>
                <p className="overflow-hidden whitespace-nowrap text-ellipsis">{chatDetails?.lastMsg?.text}</p>
            </div>
            <div className="flex flex-[0_0_auto] flex-col justify-start h-full text-[12px] text-gray-300 pt-3">
                <p>{formateDateTimeforChats(chatDetails?.lastMsg?.time)}</p>
            </div>
        </div>
    )
}

export default memo(ListCard);