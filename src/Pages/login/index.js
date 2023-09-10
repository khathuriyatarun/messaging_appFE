import { useState } from "react"
import Input from "../../Components/Common/Input/Input"
import { getOTPService, verifyOtp } from "../../services"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [userEmail, setUserEmail] = useState('')
    const [Otp, setOtp] = useState('')
    const navigate = useNavigate()

    const handleSendMessage = async () => {
        const resp = await getOTPService(userEmail)
        if (resp.data.success) {
            localStorage.setItem("user", resp.data.data._id)
            setActiveStep(1)
        }
        // will call get otp api 
    }

    const handleLogin = async () => {
        if (Otp && Otp.length == 4) {
            const userId = localStorage.getItem("user")
            // call login api with jwt token
            const resp = await verifyOtp({ otp: Otp, userId: userId })
            if(resp.status == 200) {
                navigate('/')
            }
        }
    }

    return (
        <div style={{ height: "100vh", alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}  >
            <div style={{ textAlign: 'left', width: "100%", paddingBlock: '10px' }}>
                {activeStep == 0 ?
                    <div>
                        <p >
                            Enter Email
                        </p>
                        <Input inputStyle={{ border: '1px solid' }} onClick={handleSendMessage} onChange={(event) => setUserEmail(event.target.value)} value={userEmail} />
                    </div>
                    :
                    <div>
                        <p >
                            Enter OTP
                        </p>
                        <Input inputStyle={{ border: '1px solid' }} onClick={handleLogin} value={Otp} type="password" onChange={(e) => setOtp(e.target.value)} />
                    </div>
                }
            </div>


        </div>
    )
}

export default Login