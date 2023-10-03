import logo from './logo.svg';
import './App.css';
import Firebase, { db } from './firebase';
import AddData from './AddData';
import FetchingData from './FirebaseCRUD/FetchingData';
function App() {
  return (
    <div className="App">
      <Firebase/>
      <AddData/>
      <FetchingData/>
    </div>
  );
}

export default App;
