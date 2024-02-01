import "../style/about.scss";
import Banner from "../components/banner";
import { Fragment } from "react";
import aboutBannerImg from "../asset/about_image.png"


function About() {
    const altBannerImg = "image de paysage";

    return (
        <Fragment>
            <main>
                <section className="about-banner">
                    <Banner text="" srcImage={aboutBannerImg} altImage={altBannerImg}></Banner>
                </section>
            </main>
        </Fragment>
    )
}

export default About;