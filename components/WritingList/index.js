import React from 'react';
import LinkExternal from '../LinkExternal';

import s from './index.module.css';
import g from '../../utils/grid.module.css';

const WritingItem = ({url, website, title, date}) => (
  <li>
    <LinkExternal href={url} unstyled>
      <p className={`${s.byline}`}>
        <span className={`${s.border}`}>{website}</span> on <span>{date}</span>
      </p>
      <h3 className={`${g.noMarginTop}`}>{title}</h3>
    </LinkExternal>
  </li>
);

export default class WritingList extends React.Component {
  render () {

    const {children, ...props } = this.props;

    return (
      <ul>
        <WritingItem url="http://google.com/" website="TechCrunch" title="Robots pave the way for our sci-fi future now" date="March 27, 2016" />
        <WritingItem url="http://google.com/" website="TechCrunch" title="Robots pave the way for our sci-fi future now" date="March 27, 2016" />
        <WritingItem url="http://google.com/" website="TechCrunch" title="Robots pave the way for our sci-fi future now" date="March 27, 2016" />
        <WritingItem url="http://google.com/" website="TechCrunch" title="Robots pave the way for our sci-fi future now" date="March 27, 2016" />
        <WritingItem url="http://google.com/" website="TechCrunch" title="Robots pave the way for our sci-fi future now" date="March 27, 2016" />
      </ul>
    )
  }
}
