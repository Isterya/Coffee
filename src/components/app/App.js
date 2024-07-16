import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from '../loader/Loader';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AboutUsPage = lazy(() => import('../pages/AboutUsPage/AboutUsPage'));
const PleasurePage = lazy(() => import('../pages/PleasurePage/PleasurePage'));

const App = () => {
   return (
      <Router>
         <div className="app">
            <main>
               <Suspense fallback={<Loader />}>
                  <Routes>
                     <Route path="/" element={<MainPage />} />
                     <Route path="/about-us" element={<AboutUsPage />} />
                     <Route path="/pleasure" element={<PleasurePage />} />
                  </Routes>
               </Suspense>
            </main>
         </div>
      </Router>
   );
};

export default App;
