import { Link } from "react-router-dom";

const Guitar = ({ guitar }) => {
    const { description, image, price, url, name } = guitar;

    return (
        <div className="guitar">
            <img
                src={image.data.attributes.formats.medium.url}
                alt={`Guitar ${name}`}
            />
            <div className="contain">
                <h3>{name}</h3>
                <p className="description"> {description}</p>
                <p className="price">${price}</p>
                <Link className="link" to={`/guitars/${url}`}>
                    Check it out!
                </Link>
            </div>
        </div>
    );
};

export default Guitar;
