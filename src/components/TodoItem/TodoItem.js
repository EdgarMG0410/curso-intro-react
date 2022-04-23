import React from "react";
import './TodoItem.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TodoItem (props) {
    return(
        <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="material-icons"
        onClick={props.onDelete}
      >
      DeleteOutlineIcon
      </span>
    </li>
    );
}

export {TodoItem};





