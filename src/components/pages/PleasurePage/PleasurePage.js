import { Component } from 'react';
import AppNavigation from '../../appNavigation/AppNavigation';
import AppBanner from '../../appBanner/AppBanner';
import InfoBlock from '../../infoBlock/InfoBlock';
import CoffeeList from '../../coffeeList/CoffeeList';
import AppFooter from '../../appFooter/AppFooter';

import pleasureBg from '../../../resources/img/pleasure-bg.jpg';
import pleasurePhoto from '../../../resources/img/goal-photo.png';

import './pleasurePage.scss';

class PleasurePage extends Component {
   render() {
      const coffeeItems = [
         { country: 'Brazil', price: '6.99$' },
         { country: 'Kenya', price: '6.99$' },
         { country: 'Columbia', price: '6.99$' },
         { country: 'Brazil', price: '6.99$' },
         { country: 'Brazil', price: '6.99$' },
         { country: 'Brazil', price: '6.99$' },
      ];

      return (
         <section className="coffee-pleasure">
            <AppNavigation />
            <AppBanner backgroundImage={pleasureBg} title="For your pleasure" />

            <InfoBlock
               image={pleasurePhoto}
               header="About our goods"
               description={
                  <>
                     Discover the excellence of our coffee, meticulously crafted from the finest beans.
                     <br />
                     <br />
                     From selection to roasting, we ensure perfection in every step.
                     <br />
                     Enjoy the rich, complex flavors that set our coffee apart, making each cup a special experience.
                  </>
               }
            />

            <div className="divider"></div>

            <div className="coffee-pleasure__supplies">
               <CoffeeList items={coffeeItems} />
            </div>

            <AppFooter />
         </section>
      );
   }
}

export default PleasurePage;
