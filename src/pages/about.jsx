import "../style/about.scss";
import Banner from "../components/banner";
import Collapse from "../components/collapse";
import { Fragment } from "react";
import aboutBannerImg from "../asset/about_image.png"


function About() {
    const altBannerImg = "image de paysage";
    const collapsesContents = {
        "Fiabilité": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
        "Respect"  : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entraînera une exclusion de notre plateforme.",
        "Service"  : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entraînera une exclusion de notre plateforme.",
        "Sécurité" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    };

    return (
        <Fragment>
            <main>
                <section className="about-banner">
                    <Banner text="" srcImage={aboutBannerImg} altImage={altBannerImg}></Banner>
                </section>
                <section className="about-collapses">
                    {Object.keys(collapsesContents).map((collapseContent) => <Collapse key={collapseContent} title={collapseContent} content={collapsesContents[collapseContent]}></Collapse>)}
                </section>
            </main>
        </Fragment>
    )
}

export default About;