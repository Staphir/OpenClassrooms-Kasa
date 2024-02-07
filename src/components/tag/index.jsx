import "./style.scss";

function Tag({text}) {

    return (
        <div className="tag">
            <h3 className="tag-text">{text}</h3>
        </div>
    )
}

export default Tag;