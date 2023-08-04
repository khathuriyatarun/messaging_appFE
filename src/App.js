import { useEffect, useState } from 'react';
import './App.css';

import Login from './auth/login';
import OtpInput from './auth/otp';
import Home from './components/home';
import ChatWindow from './components/chatWindow';

function App() {
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [step, setStep] = useState(0);
  const [chatWith, setChatWith] = useState(null);

  const handleChatWindow = (v) => {
    console.log('recieved a hit with id ::: ', v?.id)
    setShowChatWindow(false);
    setChatWith(null)
    if(v == null) return

    setChatWith(v);
    setShowChatWindow(true)
  }

  return (
    <div className="App">
      <div className='max-w-[450px] mx-auto'>
        { sessionStorage.getItem('me') || step == 2 ? 
          <>
            { 
              showChatWindow ? 
              <ChatWindow chatWith={chatWith} handleChatWindow={handleChatWindow} /> 
              : <Home handleChatWindow={handleChatWindow} /> 
            }
          </>
          : <>
              { step == 0 &&  <Login setStep={setStep} /> }
              { step == 1 &&  <OtpInput setStep={setStep} /> }
            </> 
        }
      </div>
    </div>
  );
}

export default App;
