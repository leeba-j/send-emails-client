import navBar from '../../components/navBar/navBar.css';
import { Link} from 'react-router-dom';

const NavBar = () => {
    return (<nav>
        <span>B M I</span>
        <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
        </ul>
    </nav>)
}

export default NavBar;