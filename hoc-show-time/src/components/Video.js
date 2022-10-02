import React from 'react';
import DateTime from './DateTime';
import withTimeCount from '../hoc/withTimeCount';

const DateTimePretty = withTimeCount(DateTime);

function Video(props) {
  return (
      <div className="video">
          <iframe 
            src={props.url} 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen>
          </iframe>
          <DateTimePretty date={props.date} />
      </div>
  )
};

export default Video;