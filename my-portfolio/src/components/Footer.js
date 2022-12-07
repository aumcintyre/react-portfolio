import React from 'react';
import resumeInfo from '../resumeInfo';

export default function Footer(props) {

    const resumeInfo = props.resumeInfo;

    return (
        <footer className='footer footer-custom'>
            <div className='row'>
                <div className=''>
                    <ul className='contact-links'>
                        {
                            resumeInfo.contactLinks && resumeInfo.contactLinks.map((link) => {
                                return (
                                    <li className='footer-icon'>
                                        <a href={link.url}>
                                            <i className={link.className}>{link.className}</i>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        </footer>
    )
}