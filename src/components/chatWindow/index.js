import { useEffect, useState, useRef } from "react";

import DisplayPicture from "../DisplayPicture";
import MsgCard from '../msgCard';
import MessageComposer from '../messageComposer'

import { formateDateTimeforChats } from '../../utils/dateTime';
import { me, chats } from "../../data/user";
import BackArrow from '../../assets/icons/back-arrow.svg'

const ChatWindow = ({chatWith, handleChatWindow}) => {
    const [chatsList, setChatsList] = useState([]);
    const bottomEl = useRef(null);

    const scrollToBottom = (behavior) => {
        if (bottomEl.current) {
            bottomEl.current.scrollTo({
              top: bottomEl.current.scrollHeight,
              behavior: behavior, // Use 'auto' for instant scroll
            });
        }
    }

    useEffect(()=> {
        setChatsList(chats.filter((chat) => chat.from == chatWith.id || chat.to == chatWith.id));
        setTimeout(() => {
            scrollToBottom('auto')
        }, 0);
    },[chatWith.id]);

    useEffect(()=> {
        setTimeout(() => {
            scrollToBottom('smooth')
        }, 0);
    },[chatsList.length])

    const sendNewMessage = (text) => {
        setChatsList(prev => [...prev, {
            text : text,
            time : formateDateTimeforChats(new Date().toISOString()),
            from : me.id,
            to : chatWith.id
        }])
    }

    return (
        <div>
            <header className="bg-[#f0f2f5] py-2 px-3 flex">
                <img src={BackArrow} alt='Back' width={22} className="mr-5" onClick={() => handleChatWindow(null)} />
                <DisplayPicture user={me} />
                <h4 className="flex items-center pl-5 font-bold text-[#333333] text-[15px]">{chatWith.name}</h4>
            </header>
            <div className="h-[calc(100vh-132px)] overflow-y-auto py-3" ref={bottomEl}>
                { chatsList.length > 0 && chatsList.map(chat => <MsgCard chat={chat} self={me.id} />) }
                {chatsList.length == 0 && <span className="fixed bottom-[70px] left-[50%] -translate-x-1/2 py-1 px-4 rounded-3xl text-xs bg-[#3ab4f233] text-[#333]" >Start chatting</span>}
            </div>
            <div className="fixed bottom-0 w-full px-3 py-2 border-t-[1px] border-[#f0f2f5] bg-[#fff]">
                <MessageComposer sendMessage={sendNewMessage} />
            </div>
        </div>
    )
}

export default ChatWindow;