import React from 'react';
import cx from 'classnames';
import LinkExternal from '../LinkExternal';
import g from '../../utils/grid.module.css';

export default class BrandList extends React.Component {
  render () {

    const {className, children, ...props } = this.props;

    return (
      <footer className={cx(className) + ``}>
        <p>Site is open source on <LinkExternal href="https://github.com/MeganKeesee/personal-site" target="_blank" rel="noopener">Github</LinkExternal>, and deployed with <LinkExternal href="https://netlify.com" target="_blank" rel="noopener">Netlify.</LinkExternal></p>
        <h4 className={`${g.marginTopSmaller}`}>Copyright © 2017 Megan Keesee</h4>
      </footer>
    )
  }
}
