import React from "react";

import calc from '../img/damage_calc_thumb.png';
import swear from '../img/swearword_filter.png';
import glu_overview from '../img/glu_pf_overview.png';

const ProjectSec = () => (
    <section className={"hero is-light"}>
        <h1 className={"has-text-weight-semibold has-text-centered mt-3 is-italic is-size-4"}>&#60;div className"projects"></h1>
        <div className="columns">
            <div className="column m-5">
                <div className="card">
                    <div className="card-image">
                        <figure className={"image is-3by3"}>
                            <img src={calc} alt=""/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h3 className={"has-text-centered"}>Model Damage Calculator API</h3>
                            <p className={"has-text-centered is-italic"}>Web App</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column m-5">
                <div className="card">
                    <div className="card-image">
                        <figure className={"image is-3by3"}>
                            <img src={swear} alt=""/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h3 className={"has-text-centered"}>Swear Filter</h3>
                            <p className={"has-text-centered is-italic"}>Web App</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column m-5">
                <div className="card">
                    <div className="card-image">
                        <figure className={"image is-3by3"}>
                            <img src={glu_overview} alt=""/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h3 className={"has-text-centered"}>GLU Portfolio Overview</h3>
                            <p className={"has-text-centered is-italic"}>Web Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <h1 className={"has-text-weight-semibold has-text-centered mb-3 is-italic is-size-4"}>&#60;/div></h1>
    </section>
);

export default ProjectSec;
