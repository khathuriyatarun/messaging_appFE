import './App.css';
import DisplayPicture from './components/DisplayPicture';
import ListCard from './components/ListCard';
import { data } from './data/user';

function App() {
  return (
    <div className="App">
      {
        data.map((user) => {
          return (
            <>
              <ListCard user={user}/>
            </>
          )
        })
      }
      
      <DisplayPicture width={200} height={200} user={data[2]} self/>
    </div>
  );
}

export default App;
