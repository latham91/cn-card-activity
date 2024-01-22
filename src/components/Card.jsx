import "./Card.css";

import PropTypes from "prop-types";

export default function Card({ title, description, time, location, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
                <h3 className="card-header">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="card-stats">
                    <div>{time}</div> | <strong>{location}</strong>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
