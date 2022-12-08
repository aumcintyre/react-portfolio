import React from 'react';

import react from '../../'
export default function About(props) {

    const resumeInfo = props.resumeInfo;

    return (
        <div className='about-container custom-container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='about-me'>
                        <h1 className='greeting'>Hi, I'm Austin McIntyre!</h1>
                        <br></br>
                        <p>
                            {resumeInfo.aboutMe}
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