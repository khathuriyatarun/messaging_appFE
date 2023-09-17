import Input from "../../Components/Common/Input/Input"
import SendersMsg from "../../Components/Common/sendersMsg"
import TopBar from "../../Components/Common/topBar"
import { chats } from "../../database/data"
import { useLocation } from "react-router-dom"
import { lists } from "../../database/data"
import { GetTime } from "../../Components/Utils/getTime"
import { useState } from "react"
import socketIO from "socket.io-client"
import { useEffect } from "react"
import { getMessageById } from "../../services"


const ChatBox = () => {
    const [inputValue, setInputValue] = useState('')
    const [allMessages, setAllMessages] = useState([])
    const { state } = useLocation();
    const user = localStorage.getItem('user')
    // const socket = socketIO.connect('http://localhost:3000');
    useEffect(() => {
        getMessages()
    }, [state._id, user])

    const getMessages = async () => {
        const resp = await getMessageById(user, state._id);
        console.log(resp.data, "hdsjj", resp)
        if (resp.status === 200) {
            setAllMessages(resp.data.message)
        }
    }
    const handleSendMessage = () => {
        // socket.emit("welcome", value);
        console.log("in");
        //api should be called to add message to databse,and then chatbox shoul be rendered
        // <SendersMsg message={value} />
    }


    return (
        <div style={{ backgroundColor: '#dcd3c6', minHeight: '100%' }}>
            <TopBar userName={state.username} displayPicture={state.displayPicture} />
            <div className="pt-[60px]">
                {allMessages.length > 0 && allMessages.map((ele) => {
                    if ((state._id == ele.from && user == ele.to) || state._id == ele.to && user == ele.from) {
                        return (
                            <div key = {ele._id}>
                                <SendersMsg message={ele.message} time={ele.time} user={user == ele.to == user ? '' : true} />
                            </div>
                        )
                    }
                })}
            </div>
            {/* <div className="pb-[70px]">
                <SendersMsg message={state.lastMessage} user={state._id == user ? true : ''} time={GetTime(new Date(state.msgTime))} />
            </div> */}
            <Input value={inputValue} placeholder={""} onChange={(event) => setInputValue(event.target.value)} style={{ backgroundColor: '#dcd3c6', bottom: 0, position: 'fixed', }} onClick={handleSendMessage} />
        </div>
    )
}

export default ChatBox