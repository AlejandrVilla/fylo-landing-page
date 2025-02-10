import TestimonialList from "./components/TestimonialList.jsx";
import TestimonialItem from "./components/TestimonialItem.jsx";
import "./home.scss";
import FeatureList from "./components/FeatureList.jsx";
import FeatureItem from "./components/FeatureItem.jsx";
import { useState } from "react";

const testimonials = [
    {
        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: "/profile-1.jpg",
        name: "Satish Patel",
        job: "Founder & CEO, Huddle"
    },
    {
        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: "/profile-2.jpg",
        name: "Bruce McKenzie",
        job: "Founder & CEO, Huddle"
    },
    {
        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: "/profile-3.jpg",
        name: "Iva Boyd",
        job: "Founder & CEO, Huddle"
    }
]

const features = [
    {
        icon: "./src/assets/icon-access-anywhere.svg",
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
        icon: "./src/assets/icon-security.svg",
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
        icon: "./src/assets/icon-collaboration.svg",
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
        icon: "./src/assets/icon-any-file.svg",
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
];

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  

const Home = () => {
    const [signUp, setSignUp] = useState(false);
    const [email, setEmail] = useState("");

    const handleClick = () => {
      window.location.reload();  
    };

    const handleSignUp = () => {
        const isValidEmail = emailPattern.test(email);  
        if(isValidEmail)
            setSignUp(false);
        else
            setSignUp(true); 
    }

    return (
        <div className="home">
            <div className="home-intro">
                <img className="home-intro-image" src="/illustration-intro.png" alt="intro image" />
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
                <img className="home-desc-image" src="/illustration-stay-productive.png" alt="productive image" />
                <div className="home-description-content">
                    <h1 className="home-desc-title">Stay productive, wherever you are</h1>
                    <p className="home-desc-text1">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p className="home-desc-text2">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <div className="home-desc-link">
                        <a className="desc-link" href="">
                            <p>See how Fylo works</p>
                            <img src="./src/assets/icon-arrow.svg" alt="arrow icon" />
                        </a>
                    </div>
                </div>
            </div>
            <TestimonialList quotesImage="/bg-quotes.png" >
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