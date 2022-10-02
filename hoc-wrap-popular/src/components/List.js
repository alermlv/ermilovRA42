import React from 'react';
import { nanoid } from 'nanoid';
import Video from './Video';
import Article from './Article';
import withWrapper from '../hoc/withWrapper';

const WrappedVideo = withWrapper(Video);
const WrappedArticle = withWrapper(Article);

function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <WrappedVideo key={nanoid()} {...item} />
      );

      case 'article':
        return (
          <WrappedArticle key={nanoid()} {...item} />
      );
    };
  });
};

export default List;