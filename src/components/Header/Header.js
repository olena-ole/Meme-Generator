import './header.css';
import logo from '../../images/troll-face.svg';

export default function Header() {
    return (
        <header className="header--container">
            <div className="header--heading">
                <img className="header--logo" src={logo} alt="" />
                <h2 className="header--title">Meme Generator</h2>
            </div>
            <p className="header--projectNo">React Course - Project 3</p>
        </header>
    )
}