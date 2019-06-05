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
      {[111111111111, 2222222222, 3333333333, 4444444444444, 555555555555, 666666666666, 77777777777, 888888888888, 9999999999999].map((row) =>
    
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
