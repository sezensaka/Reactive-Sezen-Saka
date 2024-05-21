import React from 'react';

const Header = () => {
    return (
        <header id="header" className="fixed-top" style={{ backgroundColor: 'transparent', width: '100%' }}>
            <div className="container">
                <div className="logo">
                    <img src="images/logo.png" alt="Logo" />
                </div>
                <nav className="navbar navbar-expand-lg" id="navbar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
                        <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#article2">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#article3">Trainer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#reviewclient">Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-us">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="linkbutton">JOIN US</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
