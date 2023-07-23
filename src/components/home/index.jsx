//components
import DisplayPicture from "../DisplayPicture";
import ListCard from "../ListCard";
import SearchBar from "../search";
//other
import { me, lists } from "../../data/user";



const Home = ({handleChatWindow}) => {

    return (
        <div>
            <header className="bg-[#f0f2f5] py-2 px-3">
                <DisplayPicture user={me} />
            </header>
            <div className="py-2 px-3 border-b-[1px] border-[#f0f2f5]">
                <SearchBar />
            </div>
            <div className="h-[calc(100vh-122px)] overflow-y-auto">
                { lists.map(chatDetails => <ListCard chatDetails={chatDetails} clickEvent={handleChatWindow}/>) }
            </div>
        </div>
    )
}

export default Home;