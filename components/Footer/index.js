import React from 'react';
import cx from 'classnames';
import LinkExternal from '../LinkExternal';
import Email from '../Email';
import SocialIcons from '../SocialIcons';
import g from '../../utils/grid.module.css';

export default class BrandList extends React.Component {
  render () {

    const {className, children, ...props } = this.props;

    return (
      <footer className={cx(className) + ``}>
        <div className={`${g.spaceBetween} ${g.flexEnd}`}>
          <Email /><SocialIcons />
        </div>
        <p className={`${g.marginTopSmaller}`}>Site is open source on <LinkExternal href="https://github.com">Github</LinkExternal> and deployed with <LinkExternal href="https://netlify.com">Netlify.</LinkExternal></p>
      </footer>
    )
  }
}
