import './App.css';
import { useState } from 'react';
import { data, chats } from './data/user';

import DisplayPicture from './components/DisplayPicture';
import ListCard from './components/ListCard';
import MsgCard from './components/msgCard';
import MessageComposer from './components/messageComposer';


function App() {
  const [chatsList, setChatsList] = useState(chats);

  return (
    <div className="App">
      {/* { data.map(chatDetails => <ListCard chatDetails={chatDetails}/>) } */}
      { chatsList.length > 0 && chatsList.map(chat => <MsgCard chat={chat} />) }
      <MessageComposer setChatsList={setChatsList} />


      
      {/* <DisplayPicture width={200} height={200} user={{name : data[1]?.name, display : data[1]?.display}} self/> */}
    </div>
  );
}

export default App;
