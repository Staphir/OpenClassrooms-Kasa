import "./style.scss";

function Card({id, src_image, location_title}) {
    return (
        <article className="card">
            <h3 className="location-title">{location_title}</h3>
            <img className="location-image" src={src_image} alt="Image de la location"></img>
            <div className="image-darken-filter"></div>
        </article>
    )
}

export default Card;