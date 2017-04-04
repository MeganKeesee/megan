import React, { PropTypes } from 'react';
import cx from 'classnames';
import LinkExternal from '../LinkExternal';

import iconTwitter from '../../assets/images/twitter.svg';
import iconAngellist from '../../assets/images/angellist.svg';
import iconLinkedIn from '../../assets/images/linkedin.svg';

import g from '../../utils/grid.module.css';

class SocialIcons extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {

    const { className } = this.props;

    return (
      <p className={cx(g.marginLeftSmall, className) + ``}>
        
        <LinkExternal href="https://twitter.com/megakees">
          <img src={iconTwitter} alt="Megan's Twitter Profile"/>
        </LinkExternal> 
        
        <LinkExternal href="https://angellist.com/megankeesee">
          <img src={iconAngellist} alt="Megan's Angellist Profile"/>
        </LinkExternal> 
        
        <LinkExternal href="https://www.linkedin.com/in/megankeesee">
          <img src={iconLinkedIn} alt="Megan's LinkedIn Profile"/>
        </LinkExternal>
      
      </p>
    );
  }
  
}
export default SocialIcons;
