import logo from '../logo/Dark-crop.png'; 
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="logo">
                <img src={logo} alt="hi there" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li className='nav-list'><a href="#">Home</a></li>
                    <li className='nav-list'><a href="#">Menu</a></li>
                    <li className='nav-list'><a href="#">Contact</a></li>
                    <li className='nav-list'><a href="#">Book a ride</a></li>
                    
                </ul>
            </div>
        </div>
    )
}
export default Navbar;
