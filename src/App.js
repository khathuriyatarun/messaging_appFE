import { useState } from 'react';
import './App.css';
import Home from './components/home';
import ChatWindow from './components/chatWindow';

function App() {
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [chatWith, setChatWith] = useState(null);

  const handleChatWindow = (id) => {
    console.log('recieved a hit with id ::: ', id)
    setShowChatWindow(false);
    setChatWith(null)
    if(id == null) return

    setChatWith(id);
    setShowChatWindow(true)
  }
  return (
    <div className="App">
      { 
        showChatWindow ? 
        <ChatWindow chatWith={chatWith} handleChatWindow={handleChatWindow} /> 
        : <Home handleChatWindow={handleChatWindow} /> 
      }
    </div>
  );
}

export default App;
