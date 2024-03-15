import DownloadButton from "./DownloadButton"

export default function Certificate({ cert }) {

    const certID = cert.id;
    const certTitle = cert.title;
    const certSubtitle = cert.subtitle;
    const certDuration = cert.duration;
    const certDescription = cert.description;
    const certSrc = cert.src;


    return (<>
        <div id={'certificate-' + certID} className="certificate col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
            <div className="row">
                <div className="col-12 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                    <h3>{certTitle}</h3>
                    <p className="certificate-subtitle"><span className="italics">{certSubtitle}<br className="subtitle-break" /> </span><span className="bullet-point"></span> {certDuration}</p>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-4">
                    <p>Image placeholder</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="certificate-description">{certDescription}</p>
                    <div className="certificate-button"><DownloadButton src={certSrc} buttonType="certificate" downloadName={certTitle} title="Download Certificate" /></div>
                </div>
            </div>
        </div>
    </>);
}