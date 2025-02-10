import logo from "assets/logo.svg";
import iconLocation from "assets/icon-location.svg";
import iconPhone from "assets/icon-phone.svg";
import iconEmail from "assets/icon-email.svg";
import iconFacebook from "assets/icon-facebook.svg";
import iconTwitter from "assets/icon-twitter.svg";
import iconIg from "assets/icon-ig.svg";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer-logo" src={logo} alt="logo" />
            <div className="footer-content">
                <div className="footer-location">
                    <img src={iconLocation} alt="location icon" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="footer-contact">
                    <div>
                        <img src={iconPhone} alt="phone icon" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div>
                        <img src={iconEmail} alt="email icon" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="footer-info">
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div className="footer-info">
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className="footer-icons">
                    <img className="facebook footer-icon" src={iconFacebook} alt="facebook icon"/>
                    <img className="twitter footer-icon" src={iconTwitter} alt="twitter icon"/>
                    <img className="ig footer-icon" src={iconIg} alt="ig icon"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;