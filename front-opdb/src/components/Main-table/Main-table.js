import React, { useState, useEffect } from 'react';
import './Main-table.css';
import ContextMenu from '../Context-menu/Context-menu';
import { log, headers, goTo } from '../../my_modules/stuff/index';



function MainTable() {
  const [contextEvent, setContextMenu] = useState({});
  const [openedMenu, setOpenedMenu] = useState(false);
  const [checkClose, setClose] = useState(false);
  const [checkEditInput, setEditInput] = useState(false);
  const [editInput, setOpenedEditInput] = useState(false);

  const contextMenu = (e, row) => {
    log(e.clientX, e.clientY);
    e.preventDefault();
    setContextMenu({ left: e.clientX, top: e.clientY, cont: row });
    setOpenedMenu(true);
  };

  const close = () => { window.addEventListener("close", () => setOpenedMenu(false), false) };
  const edit = () => {
    window.addEventListener("edit", () => {
      setOpenedEditInput(true)
      //log('edit event:   ', edit);
    }, false)
  };

  useEffect(() => {
    if (!checkClose) close();
    setClose(true);
  });

  useEffect(() => {
    log('36 useEffect() setEditInput', checkEditInput, editInput);
    if (!checkEditInput) edit();
    log('38 useEffect() ?checkEditInput setEditInput', checkEditInput, editInput);

    setEditInput(true);
  });

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
            {['HLXU8447492',
              'HLCUMTR190414386',
              'TE-STAR',
              'ODESSA',
              'CHISINAU',
              'ROZA A BMX923 13/06/19',
              'weights',
              '26/06',
              ''].map((row) =>
                <td onContextMenu={(e) => {
                  contextMenu(e, row);
                  log('76 EditInput', editInput);
                  (() => {
                    if (editInput) {log('78 ?EditInput', editInput)
                    return <div className="EditInput">
                      <p>EditInput</p>
                    </div>
                  }})()

                }}>
                  {row}
                </td>
              )}
          </tr>
        </tbody>
      </table >
      {(() => { if (openedMenu) return <ContextMenu position={contextEvent} /> })()}
    </div>
  );
}

export default MainTable;
