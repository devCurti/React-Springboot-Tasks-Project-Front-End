import { useState, useEffect } from 'react';
import styles from './CreateTaskInterface.module.css'
import Input from './form/Input'
import api from '../api/api';
import {FaRegWindowClose} from 'react-icons/fa'

function CreateTaskInterface({setIsOpen}){

    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [task, setTask] = useState();


    function close(){
      setIsOpen(false)
    }

    function submit(e){
        e.preventDefault();
        if((title != "" && desc != "" ) && (title != null && desc != null) ){
          api
          .post("/tasks", {
            id: null,
            title: title,
            desc: desc,
            finished: false
          })
          .then((response) => setTask(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        setIsOpen(false);
        window.location.reload(false);
        }else{
          alert("You must fill all fields!");
        }
        
        
    }

    return(
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <div className={styles.icon_container}><FaRegWindowClose className={styles.icon} onClick={close}/></div>
                <h2>Create a new task!</h2>
                <form className={styles.input_container}>
                    <Input label="Title" value={title} updateValue={setTitle}/>
                    <Input label="Description" value={desc} updateValue={setDesc}/>
                </form>
                <button onClick={submit} className={styles.btn_secondary}>Create!</button>
            </div>
        </div>
    )
}

export default CreateTaskInterface;