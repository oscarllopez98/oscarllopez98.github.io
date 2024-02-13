import SocialMediaButtons from "./SocialMediaButtons";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

    // const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // Update width and height state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const description = `I\'m not just an <span>experienced Quality Assurance Engineer</span> ;
     I\'m a <span>future-minded Software Engineer</span> driven by an unyielding passion for innovation, 
     relentless critical thinking, and a knack for unraveling complex problems.<br/> 
     <span>Start scrolling</span> and discover more <span>about me!</span>`

    return (
        <header id="home" className="pt-3 pt-md-5" style={{ height: height }}>
            <Navbar />
            <div id="home-container">
                <div id="home-text" className="text-center">
                    <h1 className="responsive-header">I'm Oscar Lopez.</h1>
                    <article id="responsive-article" className="lead lead-md" dangerouslySetInnerHTML={{ __html: description }}></article>
                    <br />
                    <SocialMediaButtons />
                </div>
            </div>
            <div class="row">
                <a id="circle-arrow-down" className="align-self-end" href="#"><FontAwesomeIcon icon={faCircleArrowDown} /></a>
            </div>
        </header>
    );
}