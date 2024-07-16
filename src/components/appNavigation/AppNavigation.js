import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import coffeeBeans from '../../resources/icons/coffee-two-beans-light.svg';

import './appNavigation.scss';

class AppNavigation extends Component {
   render() {
      return (
         <nav>
            <img className="navigation__logo" src={coffeeBeans} alt="coffeeBeans" />
            <ul className="navigation__list">
               <li className="navigation__item">
                  <NavLink end to="/">
                     Coffee house
                  </NavLink>
               </li>
               <li className="navigation__item">
                  <NavLink to="/about-us">Our coffee</NavLink>
               </li>
               <li className="navigation__item">
                  <NavLink to="/pleasure">For your pleasure</NavLink>
               </li>
            </ul>
         </nav>
      );
   }
}

export default AppNavigation;
