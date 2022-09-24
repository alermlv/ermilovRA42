import React from 'react';
import Clock from '../atoms/Clock';

function Clocks(props) {
  const { clocksList, deleteClock } = props;
  return ( 
    <div className="world-clock__content">
      {clocksList.map(clock => (
        <Clock 
          key={clock.id}
          id={clock.id} 
          deleteClock={() => deleteClock(clock.id)} 
          clockObj={clock}
        />
      ))}
    </div>
  );
}

export default Clocks;