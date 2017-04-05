import React from 'react';
import moment from 'moment';
import LinkExternal from '../LinkExternal';

import s from './index.module.css';
import g from '../../utils/grid.module.css';

import articles from '../../data/articles.json';

const WritingItem = ({publisher, date, title, url}) => (
  <li>
    <LinkExternal href={url} unstyled>
      <p className={`${s.byline}`}>
        <span className={`${s.border}`}>{publisher}</span> on <span>{date}</span>
      </p>
      <h3 className={`${g.noMarginTop}`}>{title}</h3>
    </LinkExternal>
  </li>
);

export default class WritingList extends React.Component {
  render () {

    const {children, ...props } = this.props;

    console.log(articles);

    return (
      <ul>
        {articles.map((article, i) =>
          <WritingItem key={articles[i].id} url={articles[i].url} publisher={articles[i].publisher} title={articles[i].title} date={moment(articles[i].date).format('MMMM DD, YYYY')} />
        )}
      </ul>
    )
  }
}
