import Input from "../../Components/Common/Input/Input"
import SendersMsg from "../../Components/Common/sendersMsg"
import TopBar from "../../Components/Common/topBar"
import { chats } from "../../database/data"
import { useLocation } from "react-router-dom"
import { lists } from "../../database/data"
import { GetTime } from "../../Components/Utils/getTime"
import { useState } from "react"
import socketIO from "socket.io-client"


const ChatBox = () => {
    const [inputValue, setInputValue] = useState('')
    const location = useLocation();
    let user = 1
    const socket = socketIO.connect('http://localhost:3000');

    const handleSendMessage = () => {
        // socket.emit("welcome", value);
        console.log("in");
            //api should be called to add message to databse,and then chatbox shoul be rendered
            // <SendersMsg message={value} />
        }
    return (
        <div style={{ backgroundColor: '#dcd3c6', minHeight: '100%' }}>
            <TopBar userName={lists.filter((ele) => ele.id == location.state.id)} />
            <div className="pt-[60px]">
                {chats.map((ele) => {
                    if ((location.state.id == ele.from && user == ele.to) || location.state.id == ele.to && user == ele.from) {
                        return (
                            <div>
                                <SendersMsg message={ele.text} time={ele.time} user={user == ele.to == user ? '' : true} />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="pb-[70px]">
                <SendersMsg message={location.state.lastMessage} user={location.state.id == user ? true : ''} time={GetTime(new Date(location.state.msgTime))} />
            </div>
            <Input value={inputValue} placeholder={""} onChange={(event) => setInputValue(event.target.value)} socket = {socket} style = {{backgroundColor : '#dcd3c6', bottom: 0, position: 'fixed', }} onClick = {handleSendMessage}/>
        </div>
    )
}

export default ChatBox