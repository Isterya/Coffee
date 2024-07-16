import { Component } from 'react';
import AppNavigation from '../appNavigation/AppNavigation';
import AppBanner from '../appBanner/AppBanner';
import AppFooter from '../appFooter/AppFooter';

import darkBeans from '../../resources/icons/coffee-three-beans-dark.svg';
import coffee from '../../resources/img/supplies/aromistico.png';
import aboutBg from '../../resources/img/our-coffee-bg.jpg';
import './coffeeInfo.scss';

class CoffeeInfo extends Component {
   render() {
      return (
         <div className="coffee-info">
            <AppNavigation />
            <AppBanner backgroundImage={aboutBg} title="Our coffee" />

            <div className="coffee-info__wrapper">
               <img src={coffee} alt="coffee-info" className="coffee-info__img" />
               <div className="coffee-info__text">
                  <div className="coffee-info__header">About our beans</div>
                  <div className="coffee-info__divider">
                     <img src={darkBeans} alt="coffee-divider" />
                  </div>

                  <div className="coffee-info__country">
                     <span>Country:</span> Brasil
                  </div>
                  <div className="coffee-info__descr">
                     <span>Description:</span> Immerse yourself in the vibrant flavors of Brazil with Aromistico Coffee,
                     available for just $16.99. This premium coffee blend captures the essence of Brazilian coffee
                     culture, delivering a rich and smooth experience in every cup. Handpicked from the finest Brazilian
                     coffee farms, Aromistico Coffee boasts notes of chocolate and nuts, with a subtle hint of caramel,
                     creating a harmonious and indulgent flavor profile.
                  </div>
                  <div className="coffee-info__price">
                     Price: <span>16.99$</span>
                  </div>
               </div>
            </div>

            <AppFooter />
         </div>
      );
   }
}

export default CoffeeInfo;
