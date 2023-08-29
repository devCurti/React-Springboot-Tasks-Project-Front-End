import api from "../api/api";
import { useState, useEffect } from "react";
import styles from './Finished.module.css'
import Task from "../components/Task";

function Finished(){

    useEffect(() => {
        api
          .get("/tasks")
          .then((response) => setTasks(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

      const [tasks, setTasks] = useState();

    return(
        <div className={styles.finished_container}>
            { tasks && (tasks.map((e) => e.finished == "true" ? <Task title = {e.title} id = {e.id} desc = {e.desc} finished = {e.finished}/> : <></>))}
        </div>
    )
}

export default Finished;