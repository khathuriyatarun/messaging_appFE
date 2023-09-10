import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatBox from "./Pages/ChatBox"
import Login from './Pages/login';

function App() {


  return (
    <div className="App" style={{ overflow: 'scroll', height: '100vh' }}>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<ChatBox />} path="/chatbox" />

      </Routes>


    </div>
  );
}

export default App;
