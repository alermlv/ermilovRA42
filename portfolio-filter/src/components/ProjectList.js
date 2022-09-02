import React from "react";

function ProjectList({ projects }) {
    return (
        <div className="container">
            <div className="porfolio__content">
                {projects.map((val) => {
                    return <img className="portfolio__image" src={val.img} />
                })}
            </div>
        </div>
    );
};

export default ProjectList;