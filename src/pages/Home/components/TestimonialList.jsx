import quotesImage from "/bg-quotes.png";
import "./testimonialList.scss";

const TestimonialList = ({ children }) => {
    return (
        <div className="home-testimonials">
            <img className="quotes" src={quotesImage} alt="quotes image" />
            <div className="testimonials">
                {children}
            </div>
        </div>
    );
}

export default TestimonialList;