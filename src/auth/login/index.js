import { useState } from "react";

const Login = ({setStep}) => {
    const [textValue, setTextValue] = useState('');

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-full flex flex-col items-center">
                {/* <input type="email" placeholder="Enter your email Id" /> */}
                <input 
                    type="email"
                    value={textValue}
                    onInput={(e) => setTextValue(e.target.value)}
                    placeholder="Enter your email Id"
                    className="w-full max-w-[300px] text-center text-sm bg-[#f5f7fa] text-[#333333] px-5 py-3 rounded-[50px] outline-0"
                />
                <button onClick={() => setStep(1)} className="max-w-[300px] w-full bg-[#3ab4f2] text-[#fff] rounded-3xl py-2 px-4 my-4">Continue</button>
            </div>
        </div>
    )
}

export default Login;