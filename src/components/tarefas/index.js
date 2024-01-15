import React from "react";
import { FaEdit, FaTrash} from 'react-icons/fa';
import PropTypes from 'prop-types';
import './tarefas.css'

export default function Tarefas({listatarefas,handleDelete,handleEdit}) {
    return (
        <ul className="tarefas">
            {listatarefas.map((tarefa, index) =>
                <li className="tarefa-item" key={index}>{tarefa.Name}
                    <div className="cat">{tarefa.Category}</div>
                    <span>
                        <button onClick={() => handleDelete(index)}><FaTrash className="dlt" /></button>
                        <button onClick={() => handleEdit(index)}><FaEdit className="edit" /></button>
                    </span>
                </li>)}
        </ul>
    )
}

Tarefas.propTypes={
   listatarefas:PropTypes.array.isRequired,
   handleDelete:PropTypes.func.isRequired,
   handleEdit:PropTypes.func.isRequired,

}
