import { FC } from 'react';
import Sidebar from './features/sidebar/Sidebar';
import PageOne from './features/pageOne/PageOne';

const App: FC = () => {
  return (
    <div className="container">
      <div className="App">
        <Sidebar />
        <main className='main'>
        <PageOne />
        </main>
      </div>
    </div>
  );
};

export default App;
