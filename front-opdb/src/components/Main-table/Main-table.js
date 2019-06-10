import React, { useState } from 'react';
import './Main-table.css';
import ContextMenu from '../Context-menu/Context-menu';
import {log, headers, goTo} from '../../my_modules/stuff/index';


const check = () => {return {a:3}} ;

function MainTable() {
  const [context, setContext] = useState({a:3, b:6, v:0});
  
  const showMenu = (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;


  }

  return (
    <div className="MainTable">
      <table>
        <thead>
          <tr>
            {['container',
              'BL',
              'client',
              'discharge',
              'delivery',
              'vessel',
              'customs',
              'line',
              'vehicle'].map((row) =>

                <th>
                  {row}
                </th>
              )}
          </tr>
        </thead>
        <tbody>
          <tr>
            {[  'HLXU8447492',
              'HLCUMTR190414386',
              'TE-STAR',
              'ODESSA',
              'CHISINAU',
              'ROZA A BMX923 13/06/19',
              'weights',
              '26/06',
              ''].map((row) =>
<td>
                {/* <td onContextMenu={showMenu}> */}
                  {row} 
                </td>
              )}
          </tr>
        </tbody>
      </table>
      <ContextMenu />
      <p>{log(context)}</p>
    </div>
  );
}

export default MainTable;
