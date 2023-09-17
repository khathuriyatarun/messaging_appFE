import { useEffect, useState } from "react"
import Card from "../../Components/Common/card"
import { CheckDay } from "../../Components/Utils/checkDay"
import { lists } from "../../database/data"
import SearchBar from "../../Components/Common/SearchBar"
import socketIO from "socket.io-client"
import { getLastMessages } from "../../services"
import { useNavigate } from "react-router-dom"


const HomePage = () => {
    const navigate = useNavigate();

    const [date, setDate] = useState()
    const [lastMessages, setLastMessages] = useState()
    const user = localStorage.getItem(`user`)
    useEffect(() => {
        setDate(CheckDay(new Date(Date.now() - 86400000)))
        fetchLastMessages()
    }, [])

    const fetchLastMessages = async () => {
        const resp = await getLastMessages(user)
        
        if (resp.status == 200) {
            console.log(resp.data.data)
            setLastMessages(resp.data.data)
        }

    }

    const handleNaviagte= (userData) => {
        navigate("/chatbox", {state : {...userData}})
    }

    // const socket = socketIO.connect('http://localhost:3000');
    return (
        <div>
            <SearchBar />
            <div className="pt-[70px]">
                {lastMessages && lastMessages.map((ele) => {
                    return (
                        <div key={ele.userDetails._id}>
                            <Card userName={ele.userDetails.username} lastMessage={ele?.message.message} msgTime={ele.message?.time} id={ele.userDetails._id} srcImage={ele.userDetails.displayPicture} handleNaviagte= {() => handleNaviagte(ele.userDetails)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default HomePage