export default function About() {

    const imageURL = 'src/assets/profile-pic.jpg';
    const aboutMeDescription = 'About me description.';
    const aboutMeAddress = 'Seattle, WA 98144';

    const resumeQA_URL = '';
    const resumeSDE_URL = '';

    return (
        <div id="about" className="test-mode-green">
            <div className="container">
                <div className="col-4">
                    <div className="image-container">
                    <img src={imageURL} alt="Photo of Oscar Lopez smiling." />
                    </div>
                </div>
                <div className="col-8">
                    <h2>ABOUT ME TITLE</h2>
                    <article>{aboutMeDescription}</article>
                    <div className="container">
                        <div className="col-6">
                            <h3>Contact Details</h3>
                            <p>Oscar Lopez</p>
                            <p>{aboutMeAddress}</p>
                            <br />
                            <p>(478)290-7588</p>
                            <p>oscarllopez98@gmail.com</p>
                        </div>
                        <div className="col-6">
                            <p>Resume 1</p>
                            <p>Resume 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}