import React from 'react';

function Title(props) {
  const Component = props.size ? "h" + props.size : "h1" ;

  return ( 
    <a href={props.titleSource}>
      <Component>{props.children}</Component>
    </a>
  );
}

export default Title;