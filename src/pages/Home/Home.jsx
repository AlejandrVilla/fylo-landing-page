import { useState } from "react";
import TestimonialList from "home/components/TestimonialList";
import TestimonialItem from "home/components/TestimonialItem";
import FeatureList from "home/components/FeatureList";
import FeatureItem from "home/components/FeatureItem";
import { testimonials, features, emailPattern } from "utils/info";
import illustrationIntroImg from "/illustration-intro.png";
import illustrationProductiveImg from "/illustration-stay-productive.png";
import iconArrow from "assets/icon-arrow.svg";
import "./home.scss";

const Home = () => {
    const [signUp, setSignUp] = useState(false);
    const [email, setEmail] = useState("");

    const handleClick = () => {
        window.location.reload();
    };

    const handleSignUp = () => {
        const isValidEmail = emailPattern.test(email);
        if (isValidEmail)
            setSignUp(false);
        else
            setSignUp(true);
    }

    return (
        <div className="home">
            <div className="home-intro">
                <img className="home-intro-image" src={illustrationIntroImg} alt="intro image" />
                <h1 className="home-intro-title">All your files in one secure location, accessible anywhere.</h1>
                <p className="home-intro-desc">Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.</p>
                <button className="home-intro-button" onClick={handleClick}>Get Started</button>
            </div>
            <FeatureList>
                {features.map((item, index) => (
                    <FeatureItem
                        key={index}
                        item={item}
                    />
                ))}
            </FeatureList>
            <div className="home-description">
                <img className="home-desc-image" src={illustrationProductiveImg} alt="productive image" />
                <div className="home-description-content">
                    <h1 className="home-desc-title">Stay productive, wherever you are</h1>
                    <p className="home-desc-text1">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p className="home-desc-text2">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <div className="home-desc-link">
                        <a className="desc-link" href="">
                            <p>See how Fylo works</p>
                            <img src={iconArrow} alt="arrow icon" />
                        </a>
                    </div>
                </div>
            </div>
            <TestimonialList>
                {testimonials.map((item, index) => (
                    <TestimonialItem
                        key={index}
                        item={item}
                    />
                ))}
            </TestimonialList>
            <div className="home-contact">
                <h1 className="home-contact-title">Get early access today</h1>
                <p className="home-contact-text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <div className="home-contact-div">
                    <div className="home-contact-content">
                        <label htmlFor="contact">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                id="contact"
                                placeholder="example@gmail.com"
                            />
                        </label>
                        <button onClick={handleSignUp}>Get Started For Free</button>
                    </div>
                    {signUp && <p>Please enter a valid email address</p>}
                </div>
            </div>
        </div>
    );
}

export default Home;