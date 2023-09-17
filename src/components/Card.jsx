import React from "react";

const Card = ({ image, title, genre, link }) => {
    return (
        <div className="Card">
            <img src={image} alt={title} />
            <div className="card-body">
                <h3>{title}</h3>
                <h4>{genre}</h4>
                <a href={link}>
                    <button>View Menu</button>
                </a>
                
            </div>
        </div>
    );
};

export default Card;