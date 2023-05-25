import {FC} from 'react'
import Sidebar from './components/Sidebar';

const App:FC =()=> {
  return (
    <div className="container">
      <div className="App">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
