import { FC } from 'react';
import Sidebar from './features/sidebar/Sidebar';
import PageOne from './features/pageOne/PageOne';
import { useAppSelector } from './hooks';
import { selectStep } from './features/sidebar/side-slice';
import PageTwo from './features/pageTwo/PageTwo';
import PageThree from './features/pageThree/PageThree';
import PageFour from './features/pageFour/PageFour';
import PageFive from './features/pageFive/PageFive';


const App: FC = () => {
  const step = useAppSelector(selectStep)
  return (
    <div className="container">
      <div className="App">
        <Sidebar />
        <main className="main">
        <section className="page">
            {step===1?<PageOne/>:
            step===2?<PageTwo/>:
            step===3?<PageThree />:
            step===4? <PageFour />:<PageFive />}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
