import ImageSmall from "../ImageIcon/imageSm"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckDay } from "../../Utils/checkDay"

const Card = ({ userName, lastMessage, srcImage, msgTime, id }) => {
    const [color, setColor] = useState("")
    const naviagte = useNavigate()
    useEffect(() => {
        generateColor()
    }, [])

    const generateColor = () => {
        setColor('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase());
    };

    const handleNaviagte = () => {
        naviagte('/chatbox', {state :{id : id, lastMessage:lastMessage, msgTime : msgTime}})
    }
    return (
        <div className="flex m-[15px] items-center" onClick={handleNaviagte}>
            <div className="" >

                {srcImage ?
                    <div>
                        <ImageSmall srcImage={srcImage} />
                    </div>
                    : <span className="rounded-[50%] h-[50px] w-[50px] flex justify-center items-center" style={{ backgroundColor: `${color}` }}>
                        {userName.split(' ').length > 1 ?
                            userName.split(' ')[0][0].toUpperCase() + userName.split(' ')[1][0].toUpperCase() :
                            userName.split(' ')[0][0]}
                    </span>
                }
            </div>
            <div className="flex flex-col ml-[10px] w-[60%]">
                <span className="font-bold text-left">
                    {userName}
                </span>
                <span className="text-[#979595] text-[14px] text-left font-medium" style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {lastMessage}
                </span>
            </div>
            <div className="text-[14px] text-[#979595] font-medium right-[10px] text-right w-[70px] ml-[10px]">
                {CheckDay(msgTime)}
            </div>
        </div>
    )
}
export default Card
