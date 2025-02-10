import "./testimonialItem.scss";

const TestimonialItem = (props) => {
    return (
        <div className="testimonial-item">
            <p className="testimonial-item-description">{props.item.description}</p>
            <div className="testimonial-item-body">
                <img className="testimonial-item-image" src={props.item.image} alt="item image"/>
                <div className="testimonial-item-content">
                    <p className="testimonial-name">{props.item.name}</p>
                    <p className="testimonial-job">{props.item.job}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialItem;