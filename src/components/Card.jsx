import React from "react";

const Card = ({ image, title, genre, link, map }) => {
    // if there is a site to link
    if (link !== undefined) {
        return (
            <div className="Card">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h3>{title}</h3>
                    <h4>{genre}</h4>
                    <a href={link} target="_blank" rel="noreferrer">
                        <button>View Site</button>
                    </a>
                    <a href={map} target="_blank" rel="noreferrer">
                        <button>View Map</button>
                    </a>
                </div>
            </div>
        );
    }

    // and if there isn't
    return (
        <div className="Card">
            <img src={image} alt={title} />
            <div className="card-body">
                <h3>{title}</h3>
                <h4>{genre}</h4>
                <a href={map}>
                    <button>View Map</button>
                </a>
            </div>
        </div>
    );
};

export default Card;