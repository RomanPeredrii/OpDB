import React, { useRef } from 'react';
import './Context-menu.css';
import { log, goTo } from '../../my_modules/stuff/index';

function ContextMenu(props) {
  
  return (
    <div className="ContextMenu">
      <table>
        <tr>Add {props.state}</tr>
        <tr>Edit</tr>
        <tr>Remove</tr>
      </table>
    </div>
  );
}

export default ContextMenu;
