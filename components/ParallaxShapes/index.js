import React from 'react';

export default class ParallaxShapes extends React.Component {
  render () {

    const {children, ...props } = this.props;

    return (
      <div>
          {children}
      </div>
    )
  }
}
