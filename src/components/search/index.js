import { useState } from 'react';
import BackArrow from '../../assets/icons/back-arrow.svg'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [arrowDisplay, setArrowDisplay] = useState(false)

    return(
        <div className='relative'>
            <img src={BackArrow} alt='Back' width={22} onClick={() => setSearchValue('')} className={`absolute left-[14px] top-[10px] cursor-pointer transition-all duration-500 ${!arrowDisplay && 'rotate-180 invisible'}`} />
            <input 
                type="text"
                value={searchValue}
                onFocus={() => setArrowDisplay(true)}
                onBlur={() => setArrowDisplay(false)}
                onInput={(e) => setSearchValue(e.target.value)}
                placeholder="Search or start new chat"
                className="w-full h-[40px] text-sm bg-[#f5f7fa] text-[#333333] pl-[50px] pr-4 py-3 rounded-[50px] outline-0"
            />
        </div>
    )
}

export default SearchBar;