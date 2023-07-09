import './App.css';
import DisplayPicture from './components/DisplayPicture';
import { data } from './data/user';

function App() {
  return (
    <div className="App">
      {
        data.map((user) => {
          return (
            <DisplayPicture width={49} height={49} user={user} />
          )
        })
      }
      
      <DisplayPicture width={200} height={200} />
    </div>
  );
}

export default App;
