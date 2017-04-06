import React from 'react';
import cx from 'classnames';
import Sparkle from '../Sparkle';

// Uses CSS Modules
import s from './index.module.css';

export default class Button extends React.Component {
  render () {

    const {className, children, ...props } = this.props;

    return (
      <Sparkle>
        <a className={cx(s.button, className) + ``}>
          <span className={`${s.inside}`}>{children}</span>
        </a>
      </Sparkle>
    )
  }
}
