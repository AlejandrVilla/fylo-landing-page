import logo from "assets/logo.svg";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>
            <nav className="nav-bar">
                <p className="nav-link">Features</p>
                <p className="nav-link">Team</p>
                <p className="nav-link">Sign in</p>
            </nav>
        </header>
    );
}

export default Header;