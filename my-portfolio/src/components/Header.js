import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <>
            <header>
                <ul id='nav' className='nav  header-box'>
                    <li className='nav-link'><a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'link-primary active' : 'link-secondary'}>About Me</a></li>
                    <li className='nav-link'><a href='#projects' onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'link-primary active' : 'link-secondary'}>Projects</a></li>
                    <li className='nav-link'><a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'link-primary active' : 'link-secondary'}>Contact</a></li>
                    <li className='nav-link'><a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'link-primary active' : 'link-secondary'}>Resume</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header;