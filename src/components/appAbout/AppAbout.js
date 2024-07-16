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
                     Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                     <br />
                     <br />
                     Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                     <br />
                     As greatly removed calling pleased improve an. Last ask him cold feel
                     <br />
                     met spot shy want. Children me laughing we prospect answered followed. At it went is song that held
                     help face.
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
