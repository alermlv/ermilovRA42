import React from 'react';
import Video from './Video';
import { nanoid } from 'nanoid';

function VideoList(props) {
  return props.list.map(item => 
    <Video key={nanoid()} url={item.url} date={item.date} />
  );
};

export default VideoList;