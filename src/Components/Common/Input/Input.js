import sendMessage from "../../Assets/send-message.png"

const Input = ({ value, placeholder, onChange, socket, style , inputStyle, onClick, type }) => {

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', ...style}}>
            <input
                style={{ width: "inherit", borderRadius: '25px', height: '50px', paddingInline: '20px', ...inputStyle }}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                type={type}
            ></input>
            <div style={{ position: 'absolute', right: '30px', height: '25px', width: '25px' }} onClick={onClick}>
                <img src={sendMessage} className="h-[25px] w-[25px]" />
            </div>
        </div>
    )
}

export default Input