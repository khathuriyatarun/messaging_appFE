const SendersMsg = ({ message, time, user }) => {
    return (
        <div style={{ display: "flex", justifyContent: user ? "flex-end" : '', padding: '10px ', marginRight: user ? '' : "15%", marginLeft: user ? '  s' : '' }}>

            <div className="bg-[white]  py-[5px] flex px-[10px]" style={{ backgroundColor: user ? '#d3f8b0' : 'white' }} >
                <div style={{ wordBreak: 'break-all', textAlign: 'left', textOverflow: "ellipsis" }}>
                    {message}
                </div>
                <div className="text-[12px] text-[grey] pl-[15px] flex items-end w-[75px] justify-end">
                    {time}
                </div>
            </div>
        </div>
    )
}

export default SendersMsg