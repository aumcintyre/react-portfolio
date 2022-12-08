import React from 'react';
import resumeInfo from '../resumeInfo';

export default function Footer(props) {

    const resumeInfo = props.resumeInfo;

    return (
        <footer className='footer-custom'>
            <div className='row'>
                <div className=''>
                    <ul className='contact-links'>
                        {
                            resumeInfo.contactLinks && resumeInfo.contactLinks.map((link) => {
                                return (
                                    <a className='' href={link.url}>
                                        <li className='footer-icon'>
                                            <i className={link.className}></i>
                                        </li>
                                    </a>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        </footer>
    )
}