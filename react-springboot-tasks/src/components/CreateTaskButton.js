import styles from './CreateTaskButton.module.css'

function CreateTaskButton({setIsOpen}){

    function open(){
        setIsOpen(true);
    }

    return(
        <div className={styles.button_container}>
            <button onClick={open}>Create task!</button>
        </div>
    )
}

export default CreateTaskButton;