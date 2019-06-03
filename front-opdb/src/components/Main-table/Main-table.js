import React, { useRef } from 'react';
import './Main-table.css';

// const log = console.log;
// const headers = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// };

function MainTable() {

  return (
    <div className="MainTable">
      <table>
<tr>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row) =>
    
      <td>
        {row}
      </td>
  )} 
  </tr>

      </table>
    </div>
  );
}

export default MainTable;
