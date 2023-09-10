import { useEffect, useState } from "react"
import Card from "../../Components/Common/card"
import { CheckDay } from "../../Components/Utils/checkDay"
import { lists } from "../../database/data"
import SearchBar from "../../Components/Common/SearchBar"
import socketIO from "socket.io-client"


const HomePage = () => {
    const [date, setDate] = useState()
    useEffect(() => {
        setDate(CheckDay(new Date(Date.now() - 86400000)))
    }, [])

    const socket = socketIO.connect('http://localhost:3000');
    return (
        <div>
            <SearchBar />
            <div className="pt-[70px]">
                {lists.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <Card userName={ele.name} lastMessage={ele?.lastMsg?.text} msgTime={ele.lastMsg?.time} id={ele.id} srcImage={ele.display} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default HomePage