import { memo, useState } from 'react';
import SendIcon from '../../assets/icons/send.svg'

const MessageComposer = ({ sendMessage }) => {
    const [text, setText] = useState('');


    const handleSendButton = () => {
        sendMessage(text)
        setText('')
    }

    return (
        <div>
            <div className='flex flex-nowrap'>
                <textarea 
                    className="shrink w-full h-[50px] text-sm bg-[#f5f7fa] text-[#333333] px-4 py-3 rounded-[50px] resize-none outline-0"
                    placeholder="Type a message"
                    value={text}
                    onInput={(e) => setText(e.target.value)}
                >
                </textarea>
                <button className='flex-[0_0_auto] w-[50px] h-[50px] bg-[#3ab4f2] ml-4 cursor-pointer rounded-full' onClick={handleSendButton}>
                    <img src={SendIcon} alt='send' className='mx-auto' width="18" />
                </button>
            </div>
        </div>
    )
}

export default memo(MessageComposer);