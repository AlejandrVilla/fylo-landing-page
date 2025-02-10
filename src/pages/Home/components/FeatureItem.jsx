import "./featureItem.scss";

const FeatureItem = ( props ) => {
    return (
        <div className="home-feature">
            <img className="home-feature-icon" src={props.item.icon} alt="access icon" />
            <h4 className="home-feature-title">{props.item.title}</h4>
            <p className="home-feature-desc">{props.item.description}</p>
        </div>
    );
}

export default FeatureItem;