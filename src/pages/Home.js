import styles from './Home.module.css'
import Task from '../components/Task';
import api from '../api/api';
import {useState, useEffect} from 'react'
import CreateTaskButton from '../components/CreateTaskButton';
import CreateTaskInterface from '../components/CreateTaskInterface';

function Home(){


    useEffect(() => {
        api
          .get("/tasks")
          .then((response) => setTasks(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

      const [tasks, setTasks] = useState();

      const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={styles.home_container}>
            { tasks && (tasks.map((e) => e.finished == "false" ? <Task title = {e.title} id = {e.id} desc = {e.desc} finished = {e.finished}/> : <></>))}
            <CreateTaskButton setIsOpen={setIsOpen}/>
            {isOpen ? <CreateTaskInterface setIsOpen={setIsOpen}/> : <></>}
            
        </div>
    )
}

export default Home;