import { Component } from 'react';
import AppBanner from '../appBanner/AppBanner';
import AppFooter from '../appFooter/AppFooter';
import AppNavigation from '../appNavigation/AppNavigation';
import SearchPanel from '../searchPanel/SearchPanel';
import FilterPanel from '../filterPanel/FilterPanel';
import CoffeeList from '../coffeeList/CoffeeList';
import InfoBlock from '../infoBlock/InfoBlock';

import aboutBg from '../../resources/img/our-coffee-bg.jpg';
import aboutPhoto from '../../resources/img/beans-photo.png';

import './appAbout.scss';

class AppAbout extends Component {
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
         <section className="coffee-about">
            <AppNavigation />
            <AppBanner backgroundImage={aboutBg} title="Our coffee" />

            <InfoBlock
               image={aboutPhoto}
               header="About our beans"
               description={
                  <>
                     Experience the richness of our premium coffee beans, sourced from top coffee regions.
                     <br />
                     <br />
                     Handpicked and processed with care, each bean guarantees exceptional flavor and aroma.
                     <br />
                     Discover the bold taste and unique character of our expertly crafted coffee beans.
                  </>
               }
            />

            <div className="divider"></div>

            <div className="coffee-about__search">
               <SearchPanel />
               <FilterPanel />
            </div>

            <div className="coffee-about__supplies">
               <CoffeeList items={coffeeItems} />
            </div>

            <AppFooter />
         </section>
      );
   }
}

export default AppAbout;
