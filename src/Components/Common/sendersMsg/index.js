const SendersMsg = ({ message, time, user }) => {

    const getTime= (time) => {
        const tempTime = new Date(time).toLocaleTimeString().split(':')
        return tempTime[0] + ':' + tempTime[1]
    }
    return (
        <div style={{ display: "flex", justifyContent: user ? "flex-end" : '', padding: '10px ', marginRight: user ? '' : "15%", marginLeft: user ? '  s' : '' }}>

            <div className="bg-[white]  py-[5px] flex px-[10px]" style={{ backgroundColor: user ? '#d3f8b0' : 'white' }} >
                <div style={{ wordBreak: 'break-all', textAlign: 'left', textOverflow: "ellipsis" }}>
                    {message}
                </div>
                <div className="text-[12px] text-[grey] pl-[15px] flex items-end w-[75px] justify-end">
                {getTime(time)}
                </div>
            </div>
        </div>
    )
}

export default SendersMsg