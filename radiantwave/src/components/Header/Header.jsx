import Switch from 'react-switch';
import'./header.css';

const Header = () => {
    return <div className="nav">
        {}
        <div className="nav__wrapper container"></div>
        <div className="nav__logo">Radiant Wave</div>
        <ul className="nav__menu">
            <li className="nav__menu-items"> 
            <a href="#About">About</a>
            </li>
            <li className="nav__menu-items"> 
            <a href="#Services">Services</a>
            </li>
            <li className="nav__menu-items">
                <a href="#Portfoliio">Portfolio</a>
                </li>
            <li className="nav__menu-items">
               <a href="#Contact" className="href">Contact</a>
                </li>
            <li className="buttons">
                <label htmlFor="" className="switch">
                    <Switch height={24} width={48} onColor='#4D4D4D' offColor='#ccc'/>
                </label>
            </li>
            </ul>
    </div>
}

export default Header;