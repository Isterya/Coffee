import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import darkBeans from '../../resources/icons/coffee-three-beans-dark.svg';
import coffeeBeans from '../../resources/icons/coffee-two-beans-dark.svg';

import './appFooter.scss';

class AppFooter extends Component {
   render() {
      return (
         <footer className="footer">
            <img className="footer__logo" src={coffeeBeans} alt="coffeeBeans" />
            <ul className="footer__list">
               <li className="footer__item">
                  <NavLink end to="/">
                     Coffee house
                  </NavLink>
               </li>
               <li className="footer__item">
                  <NavLink to="/about-us">Our coffee</NavLink>
               </li>
               <li className="footer__item">
                  <NavLink to="/pleasure">For your pleasure</NavLink>
               </li>
            </ul>
            <div className="footer__divider">
               <img src={darkBeans} alt="footer-beans" />
            </div>
         </footer>
      );
   }
}

export default AppFooter;
