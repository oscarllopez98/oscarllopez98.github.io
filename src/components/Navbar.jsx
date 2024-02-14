import { useState, useEffect } from "react";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(false);

    function handleClick() {
        //setIsMenuOpen(menuOpen => !menuOpen);
        setIsMenuOpen(prevIsMenuOpen => {
            console.log("Current value: " + prevIsMenuOpen + " but switching to: " + !prevIsMenuOpen);
            return !prevIsMenuOpen;
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 0 && scrollPosition < 125) {
                setIsFading(false);
                setIsFadingIn(false);
            } 
            else if (scrollPosition >= 125 && scrollPosition < 650) {
                setIsFading(true);
                setIsFadingIn(false);
            } 
            // else {
            //     setIsFading(false);
            //     setIsFadingIn(true);
            // }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    let navbarClass = `navbar navbar-expand-lg navbar-${isMenuOpen ? 'filled' : 'transparent'} `;
    navbarClass += isFading ? 'hidden' : '';
    //navbarClass += isFadingIn ? 'alternate' : '';

    return (
        <nav id="navbar" className={navbarClass}>
            <div id="navbar-container" className="container-fluid">
                <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars navbar-toggler-icon"></i>
                </button>
                <div id="navbarNavDropdown" className={`collapse navbar-collapse`}>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}
