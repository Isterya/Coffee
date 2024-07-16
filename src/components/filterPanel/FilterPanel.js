import { Component } from 'react';

import './filterPanel.scss';

class FilterPanel extends Component {
   state = {
      selectedFilters: [],
   };

   handleFilterClick = (country) => {
      this.setState((prevState) => {
         let updatedFilters = [...prevState.selectedFilters];

         if (updatedFilters.includes(country)) {
            updatedFilters = updatedFilters.filter((filter) => filter !== country);
         } else {
            updatedFilters.push(country);
         }

         this.props.onUpdateFilters(updatedFilters);

         return { selectedFilters: updatedFilters };
      });
   };

   render() {
      const { selectedFilters } = this.state;
      const filterButtons = ['Brazil', 'Kenya', 'Columbia'];

      return (
         <div className="coffee-filter">
            <div className="coffee-filter__text">Or filter by country</div>
            <div className="coffee-filter__btns">
               {filterButtons.map((country) => (
                  <button
                     key={country}
                     className={`coffee-filter__btn ${selectedFilters.includes(country) ? 'active' : ''}`}
                     onClick={() => this.handleFilterClick(country)}
                  >
                     {country}
                  </button>
               ))}
            </div>
         </div>
      );
   }
}

export default FilterPanel;
