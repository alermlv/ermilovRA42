import React from 'react';
import moment from 'moment';

function withTimeCount(Component) {
  function DateFromNow(props) {
      const dateFromNow = moment(props.date).fromNow();
      return <Component {...props} date={dateFromNow} />;
  };
  return DateFromNow;
};

export default withTimeCount;