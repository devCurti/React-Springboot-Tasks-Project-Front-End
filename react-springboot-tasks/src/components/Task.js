import axios from 'axios';
import styles from './Task.module.css'
import api from '../api/api';
import { useState } from 'react';

function Task({ id, title, desc, finished }) {

    const [idd, setIdd] = useState(id);
    const [isFinished, setIsFinished] = useState(false)


    function deleteById() {
        axios.delete("http://localhost:8080/tasks/" + id).catch(err => console.log(err.response))
        window.location.reload(false);
    }

    function finish(){
        axios.put("http://localhost:8080/tasks/" + id, {
            finished: 'true'
        }).catch(err => console.log(err.response))
        setIsFinished(true)
        window.location.reload(false);
        
    }


    return (
        <div className={styles.task_container}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className={styles.button_container}>
                <button onClick={deleteById} className={styles.deleteButton}>Delete</button>
                {finished == "true" ? <></> : <button onClick={finish} className={styles.finishButton}>Finish</button>}
            </div>
        </div>
    )
}

export default Task;