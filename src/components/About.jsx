import DownloadButton from "./DownloadButton";
import { useState, useEffect } from "react";

export default function About() {

    const imageURL = 'src/assets/profile-pic.jpg';
    const aboutMeDescription = 'I graduated from The University of Georgia (UGA), majoring in Computer Science. I started my professional career with Amazon, leading to 2+ years as a Quality Assurance Engineer. During my time with Amazon, I mostly enjoyed expanding upon our test automation, whether it was through adding more test cases, designing architecture for leveraging microservices, and developing in depth test plans. Prior to my time at Amazon, I worked at the UGA Ramsey Student Center as a Facility Technician, then was promoted to a Program Assistant. The greatest time there was spent learning how to take responsbily take apart machines, training new-hires, and using my programming skills to make my Program Assistant job more efficient!';
    const aboutMeAddress = 'Seattle, WA 98144';

    const resume_URL = 'src/assets/resumes/2024_Resume_OscarLopez.pdf';


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


    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-md-none">
                    </div>
                    <div id="img-column" className="col-12 col-md-3 col-lg-3 d-none d-md-block">
                        <img src={imageURL} alt="Picture of Oscar Lopez smiling." className="img-fluid rounded-circle" />
                    </div>
                    <div id="text-column" className="col-12 col-md-9 col-lg-9 text-center">
                        <div id="text-content">
                            <div className="row">
                                <div className="col">
                                    <h3 className="h3">About Me</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="lead about-me-text">{aboutMeDescription}</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div id="contact-details" className="col-12 col-md-6 col-lg-6">
                                    <h3 className="h3">Contact Details</h3>
                                    <p className="about-me-text">Oscar Lopez</p>
                                    <p className="about-me-text">{aboutMeAddress}</p>
                                    <p className="about-me-text">(478) 290-7588</p>
                                    <p className="about-me-text">oscarllopez98@gmail.com</p>
                                </div>
                                <div id="download-resume-buttons" className="col-12 col-md-6 col-lg-6">
                                    <DownloadButton
                                        title="Download Resume"
                                        pathToDownload={resume_URL}
                                        buttonType="download"
                                        downloadName={'Resume_OscarLopez'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}