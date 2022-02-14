import React from 'react';
import './App.css';
import { CurrentDataStatus } from '../contexts/CurrentDataStatus';
import ShowButton from './ShowButton';
import { api } from '../utils/Api';
import Table from './Table';

function App() {
  const [dataStatus, setDataStatus] = React.useState('none');
  const [rows, setRows] = React.useState([])

  
  function handleParseButton() {
    api
      .specifyParsePercentages()
      .then(setDataStatus('parced'))
      .catch((err) => {
        console.log(`Упс!  ${err.message}`);
      })
  }

  function handleShowButton() {
    api
      .getPercentages()
      .then((res) => {
        setRows(res.data)
      })
      .then((data) => {
        setDataStatus('shown');
      })
      .catch((err) => {
        console.log(`Упс!  ${err.message}`);
      })
  }
  

  return (
    <CurrentDataStatus.Provider value={dataStatus}>
      <div className="page">
        <header className="header">
          <button className='button' type="button" onClick={handleParseButton}>Parse</button>
          <ShowButton onClick={handleShowButton} />
        </header>
        {(dataStatus==='shown')&&<Table rows={rows}/>}
          
      </div>
    </CurrentDataStatus.Provider>
  );
}

export default App;
