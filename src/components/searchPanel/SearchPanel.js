import { Component } from 'react';

import './searchPanel.scss';

class SearchPanel extends Component {
   render() {
      return (
         <div className="coffee-search">
            <div className="coffee-search__text">Looking for</div>
            <input type="text" className="coffee-search__input" placeholder="start typing here..." />
         </div>
      );
   }
}

export default SearchPanel;
