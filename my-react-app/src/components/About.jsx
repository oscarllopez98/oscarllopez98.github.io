import DownloadButton from "./DownloadButton";

export default function About() {

    const imageURL = 'src/assets/profile-pic.jpg';
    const aboutMeDescription = 'I graduated from The University of Georgia (UGA), majoring in Computer Science. I started my professional career with Amazon, leading to 2+ years as a Quality Assurance Engineer. During my time with Amazon, I mostly enjoyed expanding upon our test automation, whether it was through adding more test cases, designing architecture for leveraging microservices, and developing in depth test plans. Prior to my time at Amazon, I worked at the UGA Ramsey Student Center as a Facility Technician, then was promoted to a Program Assistant. The greatest time there was spent learning how to take responsbily take apart machines, training new-hires, and using my programming skills to make my Program Assistant job more efficient!';
    const aboutMeAddress = 'Seattle, WA 98144';

    const resumeQA_URL = '';
    const resumeSDE_URL = '';

    return (
        <div id="about">
            <div className="row">
                <div className="col-3">
                    <img src={imageURL} alt="Picture of Oscar Lopez smiling." className="img-fluid rounded-circle"/>
                </div>
                <div className="col-9">
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
                    <div className="row">
                        <div className="col">
                            <h3 className="h3">Contact Details</h3>
                            <p className="about-me-text">{aboutMeAddress}</p>
                            <p className="about-me-text">(478) 290-7588</p>
                            <p className="about-me-text">oscarllopez98@gmail.com</p>
                        </div>
                        <div className="col">
                            <p>Button 1</p>
                            <p>Button 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div id="about" className="test-mode-green">
        //     <div className="temp-container">
        //         <div id="about-column-image" className="col-4">
        //             <div className="image-container">
        //             <img src={imageURL} alt="Photo of Oscar Lopez smiling." />
        //             </div>
        //         </div>
        //         <div id="about-column-text" className="col-8">
        //             <h2>About Me</h2>
        //             <article>{aboutMeDescription}</article>
        //             <div className="temp-container">
        //                 <div className="col-6">
        //                     <h3>Contact Details</h3>
        //                     <p>Oscar Lopez</p>
        //                     <article>{aboutMeAddress}</article>
        //                     <br />
        //                     <p>(478) 290-7588</p>
        //                     <p>oscarllopez98@gmail.com</p>
        //                 </div>
        //                 <div className="col-6">
        //                     <div><DownloadButton title={'Download Resume: QA'} pathToDownload={null} buttonType={'resume'} /></div>
        //                     <div><DownloadButton title={'Download Resume: SDE'} pathToDownload={null} buttonType={'resume'}/></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}