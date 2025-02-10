import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer-logo" src="./src/assets/logo.svg" alt="logo" />
            <div className="footer-content">
                <div className="footer-location">
                    <img src="./src/assets/icon-location.svg" alt="location icon" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="footer-contact">
                    <div>
                        <img src="./src/assets/icon-phone.svg" alt="phone icon" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div>
                        <img src="./src/assets/icon-email.svg" alt="email icon" />
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
                    <img className="facebook footer-icon" src="./src/assets/icon-facebook.svg" alt="facebook icon"/>
                    <img className="twitter footer-icon" src="./src/assets/icon-twitter.svg" alt="twitter icon"/>
                    <img className="ig footer-icon" src="./src/assets/icon-ig.svg" alt="ig icon"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;