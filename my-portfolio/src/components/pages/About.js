import React from 'react';

import react from '../../'
export default function About(props) {

    const resumeInfo = props.resumeInfo;

    return (
        <div className='row'>
            <div className='col-4'>
                <h1>Let me tell you a little about myself...</h1>
                <br></br>
                <p>
                    {resumeInfo.aboutMe}
                </p>
            </div>
            <div className='col-8'>
                <h1>This is where my picture will go!</h1>
                <img src="images/aboutme.jpg" />

            </div>

        </div>
    )
}