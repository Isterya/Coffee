import AppPerfomance from '../appPerformance/AppPerfomance';
import AppAbout from '../appAbout/AppAbout';
import CoffeeInfo from '../coffeeInfo/CoffeeInfo';
import CoffeePleasure from '../coffeePleasure/CoffeePleasure';

const App = () => {
   return (
      <div className="app">
         <main>
            {/* <AppPerfomance /> */}
            {/* <AppAbout /> */}
            {/* <CoffeeInfo /> */}
            <CoffeePleasure />
         </main>
      </div>
   );
};

export default App;
