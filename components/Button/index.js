import React from 'react';

// Uses CSS Modules
import s from './index.module.css'

export default class Button extends React.Component {
  render () {

    const {children, ...props } = this.props;

    return (
      <a className={`${s.button}`}>
        <span className={`${s.inside}`}>{children}</span>
      </a>
    )
  }
}
