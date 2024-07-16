import React from 'react';

import beans from '../../resources/icons/coffee-three-beans-dark.svg';
import './infoBlock.scss';

const InfoBlock = ({ image, header, description }) => {
   return (
      <div className="info-block__wrapper">
         <img src={image} alt="info-block" className="info-block__img" />
         <div className="info-block__text">
            <div className="info-block__header">{header}</div>
            <div className="info-block__divider">
               <img src={beans} alt="divider" />
            </div>
            <div className="info-block__descr">{description}</div>
         </div>
      </div>
   );
};

export default InfoBlock;
