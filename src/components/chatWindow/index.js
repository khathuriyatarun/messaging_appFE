import { useEffect, useState } from "react";

import DisplayPicture from "../DisplayPicture";
import MsgCard from '../msgCard';
import MessageComposer from '../messageComposer'

import { formateDateTimeforChats } from '../../utils/dateTime';
import { me, chats } from "../../data/user";
import BackArrow from '../../assets/icons/back-arrow.svg'

const ChatWindow = ({chatWith, handleChatWindow}) => {
    const [chatsList, setChatsList] = useState([]);

    useEffect(()=> {
        setChatsList(chats.filter((chat) => chat.from == chatWith || chat.to == chatWith))
    },[chatWith]);

    const sendNewMessage = (text) => {
        setChatsList(prev => [...prev, {
            text : text,
            time : formateDateTimeforChats(new Date().toISOString()),
            from : me.id,
            to : chatWith
        }])
    } 

    return (
        <div>
            <header className="bg-[#f0f2f5] py-2 px-3 flex">
                <img src={BackArrow} alt='Back' width={22} className="mr-5" onClick={() => handleChatWindow(null)} />
                <DisplayPicture user={me} />
            </header>
            <div className="h-[calc(100vh-132px)] overflow-y-auto py-3">
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