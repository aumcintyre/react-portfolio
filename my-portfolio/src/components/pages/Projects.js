import React from 'react';
import resumeInfo from '../../resumeInfo';

export default function Projects(props) {

    const resumeInfo = props.resumeInfo;

    return (
        <section id='projects' className='custom-container'>
            <div>
                <div>
                    <h1 style={{ color: "white", margin: "25px" }}>My Projects</h1>
                    <div className='projects row'>
                        {
                            resumeInfo.projects && resumeInfo.projects.map((project) => {
                                return (
                                    <div className='project-container col-md-6 col-sm-11 col-xs-11'>
                                        <div>
                                            <a href={project.url} className='project-link'>
                                                <img src={project.image} className='project-image' />
                                                <div className='overlay'>
                                                    <div className='overlay-text'>
                                                        <h3>{project.name}</h3>
                                                        <p>{project.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}