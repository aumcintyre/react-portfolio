import React from 'react';

import react from '../../'
export default function About(props) {

    const resumeInfo = props.resumeInfo;

    return (
        <div className='about-container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='about-me'>
                        <h1 className='greeting'>A little about me...</h1>
                        <br></br>
                        <p>
                            {resumeInfo.aboutMe1}
                        </p>
                        <hr></hr>
                        <p>
                            {resumeInfo.aboutMe2}
                        </p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img className='profile-picture' src="images/austin-tux.jpg" />

                </div>

            </div>
        </div>
    )
}