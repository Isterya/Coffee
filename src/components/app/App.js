import AppPerfomance from '../appPerformance/AppPerfomance';
import AppAbout from '../appAbout/AppAbout';
import CoffeeInfo from '../coffeeInfo/CoffeeInfo';

const App = () => {
   return (
      <div className="app">
         <main>
            {/* <AppPerfomance /> */}
            {/* <AppAbout /> */}
            <CoffeeInfo />
         </main>
      </div>
   );
};

export default App;
