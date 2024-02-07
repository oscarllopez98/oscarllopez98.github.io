import SocialMediaButtons from "./SocialMediaButtons";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Home() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // Update width and height state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.width);
            setHeight(window.height);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    const description = `I\'m not just an experienced Quality Assurance Engineer ;
     I\'m a future-minded Software Engineer driven by an unyielding passion for innovation, 
     relentless critical thinking, and a knack for unraveling complex problems. 
     Start scrolling and discover more about me!`

    return (
        <header id="home" className="test-mode" style={{ width: width, height: height }}>
            <Navbar />
            <h1>I'm Oscar Lopez.</h1>
            <article>{description}</article>
            <SocialMediaButtons />
            <p>Navigation Arrow</p>
        </header>
    );
}