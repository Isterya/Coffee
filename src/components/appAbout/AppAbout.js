import { Component } from 'react';
import AppBanner from '../appBanner/AppBanner';
import AppFooter from '../appFooter/AppFooter';
import AppNavigation from '../appNavigation/AppNavigation';
import SearchPanel from '../searchPanel/SearchPanel';
import FilterPanel from '../filterPanel/FilterPanel';
import CoffeeList from '../coffeeList/CoffeeList';

import aboutBg from '../../resources/img/our-coffee-bg.jpg';
import aboutPhoto from '../../resources/img/beans-photo.png';
import darkBeans from '../../resources/icons/coffee-three-beans-dark.svg';

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

            <div className="coffee-about__wrapper">
               <img src={aboutPhoto} alt="about-our-beans" className="coffee-about__img" />
               <div className="coffee-about__text">
                  <div className="coffee-about__header">About our beans</div>
                  <div className="coffee-about__divider">
                     <img src={darkBeans} alt="coffee-divider" />
                  </div>
                  <div className="coffee-about__descr"></div>
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                  <br />
                  <br />
                  Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                  <br />
                  As greatly removed calling pleased improve an. Last ask him cold feel
                  <br />
                  met spot shy want. Children me laughing we prospect answered followed. At it went is song that held
                  help face.
               </div>
            </div>

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
