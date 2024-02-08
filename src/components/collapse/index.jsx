import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { useState } from "react";
import { useRef } from "react";


function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    const [chevronPosition, setChevronPosition] = useState("up")
    const ref = useRef();
        
    const toggleDropdown = () => {
        if(isOpen) {
            setIsOpen(false);
            setChevronPosition("up");
        } else {
            setIsOpen(true);
            setChevronPosition("down");
        }
    }

    return (
        <div className="collapse">
            <button className="top-bar">
                {title}
                <FontAwesomeIcon icon={faChevronUp} className={"chevron " + chevronPosition} onClick={toggleDropdown}></FontAwesomeIcon>
            </button>
            <div ref={ref} className="collapse-content" style={isOpen ? {height : ref.current.scrollHeight + "px"} : {height: "0px"}}><div className="collapse-text">{content}</div></div>
        </div>
    );
}

export default Collapse;