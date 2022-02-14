import React from 'react';
import { CurrentDataStatus } from '../contexts/CurrentDataStatus';

export default function ShowButton(props) {
  const status = React.useContext(CurrentDataStatus);
  return (
    <>
    {
    (status === 'none') ? (<button className='button' disabled type="button">Show</button>) :
      (<button className='button' type="button" onClick={props.onClick}>Show</button>)
  }
  </>)
}