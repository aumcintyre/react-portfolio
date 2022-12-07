import React from 'react';

import react from '../../'
export default function About(props) {

    const resumeInfo = props.resumeInfo;

    return (
        <div className='about-container'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='about-me'>
                        <h1>A little about myself...</h1>
                        <br></br>
                        <p>
                            {resumeInfo.aboutMe}
                        </p>
                    </div>
                </div>
                <div className='col-md-7'>
                    <img className='profile-picture' src="images/austin-tux.jpg" />

                </div>

            </div>
        </div>
    )
}