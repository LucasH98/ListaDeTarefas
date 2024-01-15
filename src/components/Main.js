import React, { useState } from 'react';
import Form from './form/index';
import Tarefas from './tarefas/index';
import './Main.css';

export default function Main() {
    const [novatarefa, setNovaTarefa] = useState({ Name: '', Category: '' });
    const [listatarefas, setListatarefas] = useState([]);
    const [index, setIndex] = useState(-1);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(novatarefa);
    }

    const createTask = (task) => {

        if (index === -1 && task.Name && task.Name.trim() !== '') { //se n tiver tarefa ainda
            setNovaTarefa({ Name: '', Category: '' });
            setListatarefas([...listatarefas, task]);
        }
        else {
            const updatedList = [...listatarefas];
            updatedList[index] = task;
            setIndex(-1);

            setListatarefas(updatedList);
            setNovaTarefa({ Name: '', Category: '' });
            setIndex(-1);
        }
    }

    const handleEdit = (index) => {
        const updatedList = [...listatarefas];
        setNovaTarefa(updatedList[index]);
        setIndex(index);
    };

    const handleDelete = (index) => {
        const updatedList = [...listatarefas];
        updatedList.splice(index, 1);
        setListatarefas(updatedList);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovaTarefa((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };



    return (
        <div className="main">
            <h1 className="addh1">Adicione uma nova tarefa</h1>
            <section>
                <Form
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    novatarefa={novatarefa}
                    index={index}
                />
            </section>
            <hr></hr>
            <h1>Minhas Tarefas</h1>
            <Tarefas
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                listatarefas={listatarefas} />
        </div>
    );
}
