import { Component } from 'react';
import { Link } from 'react-router-dom';

import './coffeeList.scss';

import aromistico from '../../resources/img/supplies-mini/aromistico-coffee.png';

class CoffeeList extends Component {
   render() {
      const { items } = this.props;

      return (
         <div className="coffee-list">
            {items.map((item, index) => (
               <Link key={index} to={`/coffee/${index}`} className="coffee-list__item">
                  <img src={aromistico} alt={item.country} className="coffee-list__img" />
                  <div className="coffee-list__header">AROMISTICO Coffee 1 kg</div>
                  <div className="coffee-list__country">{item.country}</div>
                  <div className="coffee-list__price">{item.price}</div>
               </Link>
            ))}
         </div>
      );
   }
}

export default CoffeeList;
