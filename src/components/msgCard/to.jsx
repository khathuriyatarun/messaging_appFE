import { memo } from "react";

const ToMsg = ({text, time}) => {
    return (
        <div className="max-w-[70%] mb-2">
            <span className="inline-block min-w-[70px] p-[10px] pr-3 bg-[#e6e8f0] text-[#333333] rounded-r-3xl text-sm">{text}</span>
            <span className="block text-[11px] text-gray-500 mt-1">{time}</span>
        </div>
    )
}

export default memo(ToMsg);