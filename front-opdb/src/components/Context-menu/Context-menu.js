import React, { useRef } from 'react';
import './Context-menu.css';
import { log, goTo } from '../../my_modules/stuff/index';


function ContextMenu(props) {

// log(props);

  const closeContextMenu = () => {
    const close = new Event("close");
    window.dispatchEvent(close);
  };
  const editItem = () => {log(props.position.cont)
    const edit = new Event("edit");
    window.dispatchEvent(edit);
    closeContextMenu();
  }; 
  return (
    <div className="ContextMenu" style={props.position} >
      <div className="Substrate" onClick={closeContextMenu} ></div>
      <table>
        <tr onClick={editItem}>Add </tr>
        <tr onClick={editItem}>Edit</tr>
        <tr onClick={editItem}>Remove</tr>
      </table>

    </div>
  );
}

export default ContextMenu;
