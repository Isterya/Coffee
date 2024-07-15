import { Component } from 'react';

import darkBeans from '../../resources/icons/coffee-three-beans-dark.svg';
import coffeeBeans from '../../resources/icons/coffee-two-beans-dark.svg';

import './appFooter.scss';

class AppFooter extends Component {
   render() {
      return (
         <footer className="footer">
            <img className="footer__logo" src={coffeeBeans} alt="coffeeBeans" />
            <ul className="footer__list">
               <li className="footer__item">Coffee house</li>
               <li className="footer__item">Our coffee</li>
               <li className="footer__item">For your pleasure</li>
            </ul>
            <div className="footer__divider">
               <img src={darkBeans} alt="footer-beans" />
            </div>
         </footer>
      );
   }
}

export default AppFooter;
