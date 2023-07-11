import DisplayPicture from "../DisplayPicture";

const ListCard = ({user}) => {
    return(
        <div className="flex justify-between items-center h-[70px] max-w-[500px] rounded-[60px] px-4 mx-2 cursor-pointer transition-all hover:bg-[#e1e1e1]">
            <DisplayPicture user={user} />
            <div className="flex flex-auto overflow-hidden whitespace-nowrap flex-col justify-center h-full text-[#333] text-sm px-3">
                <h6 className="font-bold">{user.name}</h6>
                <p className="overflow-hidden whitespace-nowrap text-ellipsis">yeah! its perfact for me ey hey== ajdkf adadfaiufadfjadlf aidfadkfjad f</p>
            </div>
            <div className="flex flex-[0_0_auto] flex-col justify-start h-full text-[12px] text-gray-300 pt-3">
                <p>08:15 PM</p>
            </div>
        </div>
    )
}

export default ListCard;