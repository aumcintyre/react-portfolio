import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <>
            <header className='header-box'>
                <ul id='nav' className='nav'>
                    <li className='active  nav-link'><a href='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a></li>
                    <li className='active  nav-link'><a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
                    <li className='active  nav-link'><a href='#projects' onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a></li>
                    <li className='active  nav-link'><a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
                    <li className='active  nav-link'><a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Resume</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header;