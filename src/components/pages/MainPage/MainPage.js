import { Component } from 'react';
import { Link } from 'react-router-dom';

import AppNavigation from '../../appNavigation/AppNavigation';
import AppFooter from '../../appFooter/AppFooter';

import beans from '../../../resources/icons/coffee-three-beans-light.svg';
import darkBeans from '../../../resources/icons/coffee-three-beans-dark.svg';

import solimo from '../../../resources/img/supplies-mini/solimo-coffee.png';
import presto from '../../../resources/img/supplies-mini/presto-coffee.png';
import aromistico from '../../../resources/img/supplies-mini/aromistico-coffee.png';

import './mainPage.scss';

class MainPage extends Component {
   render() {
      return (
         <section className="coffee-perfomance">
            <AppNavigation />
            <div className="coffee-perfomance__wrapper">
               <div className="coffee-perfomance__header">Everything You Love About Coffee</div>
               <div className="coffee-perfomance__divider">
                  <img src={beans} alt="coffee-beans" />
               </div>
               <div className="coffee-perfomance__subheader">We make every day full of energy and taste</div>
               <div className="coffee-perfomance__subheader mt20px">Want to try our beans?</div>

               <button className="btn-more">
                  <Link to="/about-us">More</Link>
               </button>
            </div>

            <div className="coffee-perfomance__about">
               <div className="coffee-perfomance__about-header">About us</div>
               <div className="coffee-perfomance__divider">
                  <img src={darkBeans} alt="coffee-divider" />
               </div>
               <div className="coffee-perfomance__about-descr">
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly
                  months do things on at. Situation recommend objection do intention so questions. As greatly removed
                  calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
                  answered followed. At it went is song that held help face.
                  <br />
                  <br />
                  Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw.
                  Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage.
                  Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active
                  living depend son repair day ladies now.
               </div>
            </div>

            <div className="coffee-perfomance__best">
               <div className="coffee-perfomance__best-header">Our best</div>

               <div className="coffee-perfomance__best-items">
                  <div className="coffee-perfomance__best-item">
                     <img className="coffee-perfomance__best-img" src={solimo} alt="solimo-coffee" />
                     <div className="coffee-perfomance__best-title">Solimo Coffee Beans 2 kg</div>
                     <div className="coffee-perfomance__best-price">10.73$</div>
                  </div>
                  <div className="coffee-perfomance__best-item">
                     <img className="coffee-perfomance__best-img" src={presto} alt="presto-coffee" />
                     <div className="coffee-perfomance__best-title">Presto Coffee Beans 1 kg</div>
                     <div className="coffee-perfomance__best-price">15.99$</div>
                  </div>
                  <div className="coffee-perfomance__best-item">
                     <img className="coffee-perfomance__best-img" src={aromistico} alt="aromistico-coffee" />
                     <div className="coffee-perfomance__best-title">AROMISTICO Coffee 1 kg</div>
                     <div className="coffee-perfomance__best-price">6.99$</div>
                  </div>
               </div>
            </div>

            <AppFooter />
         </section>
      );
   }
}

export default MainPage;
