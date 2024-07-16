import { Component } from 'react';

import './searchPanel.scss';

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: '',
      };
   }

   onUpdateSearch = (e) => {
      const term = e.target.value;
      this.setState({ term });
      this.props.onUpdateSearch(term);
   };

   render() {
      return (
         <div className="coffee-search">
            <div className="coffee-search__text">Looking for</div>
            <input
               value={this.state.term}
               onChange={this.onUpdateSearch}
               type="text"
               className="coffee-search__input"
               placeholder="start typing here..."
            />
         </div>
      );
   }
}

export default SearchPanel;
