import './App.css';
import DisplayPicture from './components/DisplayPicture';
import ListCard from './components/ListCard';
import { data } from './data/user';

function App() {
  return (
    <div className="App">
      {
        data.map((chatDetails) => {
          return (
            <>
              <ListCard chatDetails={chatDetails}/>
            </>
          )
        })
      }
      
      {/* <DisplayPicture width={200} height={200} user={{name : data[1]?.name, display : data[1]?.display}} self/> */}
    </div>
  );
}

export default App;
