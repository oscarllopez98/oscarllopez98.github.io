import { useState } from "react";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        //setIsMenuOpen(menuOpen => !menuOpen);
        setIsMenuOpen(prevIsMenuOpen => {
            console.log("Current value: " + prevIsMenuOpen + " but switching to: " + !prevIsMenuOpen);
            return !prevIsMenuOpen;
        });
    }

    return (
        <nav id="navbar" className={`navbar sticky-top navbar-expand-lg navbar-${isMenuOpen ? 'filled' : 'transparent'}`}>
            <div id="navbar-container" className="container-fluid">
                <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars navbar-toggler-icon"></i>
                </button>
                <div id="navbarNavDropdown" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">RESUME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOBBIES & INTEREST</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}