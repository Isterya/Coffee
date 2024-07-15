import { Component } from 'react';

import './filterPanel.scss';

class FilterPanel extends Component {
   render() {
      return (
         <div className="coffee-filter">
            <div className="coffee-filter__text">Or filter</div>
            <div className="coffee-filter__btns">
               <button className="coffee-filter__btn">Brazil</button>
               <button className="coffee-filter__btn">Kenya</button>
               <button className="coffee-filter__btn">Columbia</button>
            </div>
         </div>
      );
   }
}

export default FilterPanel;
