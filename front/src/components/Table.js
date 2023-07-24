import React from 'react';
import './Table.css';
export default function Table(props) {
  return (
    <table className='table'>
      <thead className='table__head'>
        <tr className='table_title'>
          <th className='table__cell'>name</th>
          <th className='table__cell'>market cap</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => {
          return (
            <tr className='table__row' key={index}>
              <td className='table__name table__cell'>{row.name}</td>
              <td className='table__cell'>{row.percentage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
