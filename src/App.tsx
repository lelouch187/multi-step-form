import { FC } from 'react';
import Sidebar from './features/sidebar/Sidebar';
import PageOne from './features/pageOne/PageOne';
import { Route, Routes } from 'react-router-dom';
import { router } from './router';

const App: FC = () => {
  return (
    <div className="container">
      <div className="App">
        <Sidebar />
        <main className="main">
        <section className="page">
          <Routes>{router.map(route=>{
            return <Route key={route.key}
            path={route.path} 
            element={<route.element />} 
            />
          })}</Routes>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
