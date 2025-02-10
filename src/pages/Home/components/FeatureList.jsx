import "./featureList.scss";

const getWindowType = (width) => {
    if (width <= 800) return "mobile";
    return "desktop";
}

const FeatureList = ({ children }) => {
    const windowType = getWindowType(window.innerWidth);
    const image = `/bg-curvy-${windowType}.svg`;

    return (
        <div className="home-features">
            <img className="home-curvy-image" src={image} alt="curvy icon" />
            <div className="features">
                {children}
            </div>
        </div>
    );
}

export default FeatureList;