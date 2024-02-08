import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({rate, maxRate}) {
    let rateIcons = [];
    for(let indexRate = 1; indexRate <= maxRate; indexRate++) {
        rateIcons.push(<FontAwesomeIcon icon={faStar} className={"star " + (rate >= indexRate ? "solid" : "regular")}></FontAwesomeIcon>)
    }

    return (
        <div className="rating">
            {rateIcons}
        </div>
    )
}

export default Rating;