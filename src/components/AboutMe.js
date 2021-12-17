import React from "react";
import pf from '../img/pf_justin.png';

const AboutMe = () => (
    <section className={"container  mt-6 mb-6"}>
        <div className={"box"}>
            <div className="columns">
                <div className="column is-four-fifths">
                    <div className="container m-5">
                        <h1 className={"has-text-weight-semibold is-italic is-size-4"}>&#60;div className"about"></h1>
                        <p className={"ml-5 mt-3 mb-3 has-text-weight-light"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit </p>
                        <h1 className={"has-text-weight-semibold is-italic is-size-4"}>&#60;/div></h1>
                    </div>

                </div>
                <div className="column ">
                    <figure>
                        <img src={pf} alt=""/>
                    </figure>
                </div>

            </div>
        </div>
    </section>
);


export default AboutMe;
