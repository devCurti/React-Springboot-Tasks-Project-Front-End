import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navbar_container}>
            <ul>
                <li><Link to="/">Tasks</Link></li>
                <li><Link to="/finished">Finished</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;