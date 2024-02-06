import { useParams } from "react-router-dom";
import "../style/accomodation.scss";
import logementsDB from "../data/logements.json";
import Slideshow from "../components/slideshow";

function Accomodation() {
    const {logementId} = useParams();
    const logementSelected = logementsDB.find(logement => {
        return logement.id === logementId;
    })

    return (
        <main>
            <section>
                <Slideshow pictures={logementSelected.pictures}></Slideshow>
            </section>
        </main>
    )
}

export default Accomodation;