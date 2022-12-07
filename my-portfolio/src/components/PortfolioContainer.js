import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './Footer'
import resumeInfo from '../resumeInfo';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {
        if (currentPage === 'About') {
            return <About resumeInfo={resumeInfo} />;
        }
        if (currentPage === 'Projects') {
            return <Projects resumeInfo={resumeInfo} />;
        }
        if (currentPage === 'Contact') {
            return <Contact resumeInfo={resumeInfo} />;
        }
        if (currentPage === 'Resume') {
            return <Resume resumeInfo={resumeInfo} />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer resumeInfo={resumeInfo} />
        </div>
    );
}