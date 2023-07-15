import { memo } from "react";

const FromMsg = ({text, time}) => {
    return (
        <div className="max-w-[70%] mb-2 ml-auto text-right">
            <span className="inline-block min-w-[70px] p-[10px] pr-auto text-left bg-[#3ab4f2] text-[#f9f9f9] rounded-l-3xl text-sm">{text}</span>
            <span className="block text-[11px] text-gray-500 mt-1">{time}</span>
        </div>
    )
}


export default memo(FromMsg);