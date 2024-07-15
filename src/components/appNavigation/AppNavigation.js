import coffeeBeans from '../../resources/icons/coffee-two-beans-light.svg';
import { Component } from 'react';

import './appNavigation.scss';

class AppNavigation extends Component {
   render() {
      return (
         <nav>
            <img className="navigation__logo" src={coffeeBeans} alt="coffeeBeans" />
            <ul className="navigation__list">
               <li className="navigation__item">Coffee house</li>
               <li className="navigation__item">Our coffee</li>
               <li className="navigation__item">For your pleasure</li>
            </ul>
         </nav>
      );
   }
}

export default AppNavigation;
