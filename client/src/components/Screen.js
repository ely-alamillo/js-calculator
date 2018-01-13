import React from 'react'; // Import react module
import Display from './Display';

const Screen = (props) => {
  return (
    <div className="screen">
      <Display value={props.calculation}/>
      <Display value={props.response}/>
    </div>
  );
}

export default Screen;