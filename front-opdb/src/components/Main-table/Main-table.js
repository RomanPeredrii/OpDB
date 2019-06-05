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
<<<<<<< HEAD
      {[111111111111, 2222222222, 3333333333, 4444444444444, 555555555555, 666666666666, 77777777777, 888888888888, 9999999999999].map((row) =>
=======
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row) =>
>>>>>>> d6a60c74497eaa3dad1ae6fb204479248d24f981
    
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
