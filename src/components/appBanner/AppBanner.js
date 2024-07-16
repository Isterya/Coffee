import { Component } from 'react';
import PropTypes from 'prop-types';

import './appBanner.scss';

class AppBanner extends Component {
   render() {
      const { backgroundImage, title } = this.props;

      const bannerStyle = {
         background: `url(${backgroundImage}) center/cover no-repeat`,
      };

      return (
         <div className="coffee-banner" style={bannerStyle}>
            <div className="coffee-banner__wrapper">
               <div className="coffee-banner__title">{title}</div>
            </div>
         </div>
      );
   }
}

AppBanner.propTypes = {
   backgroundImage: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
};

export default AppBanner;
