import React from 'react';
import Popular from '../components/Popular';
import New from '../components/New';

function withWrapper(Component) {
  function Wrapper(props) {
    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    } else if (props.views <= 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    };
    return (
      <Component {...props} />
    );
  };
  return Wrapper;
};

export default withWrapper;