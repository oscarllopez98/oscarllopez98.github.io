import DownloadButton from "./DownloadButton"

export default function Certificate({ cert }) {

    const certID = cert.id;
    const certTitle = cert.title;
    const certSubtitle = cert.subtitle;
    const certDuration = cert.duration;
    const certDescription = cert.description;
    const certSrc = cert.src;
    const certBadgeSrc = cert.badgeSrc


    return (
        <div id={'certificate-' + certID} className="certificate col-12 col-sm-12 col-md-12 col-lg-8 col-xl-10">
            <div id="certificate-badge-row" className="row">
                {
                    certBadgeSrc.length > 0 ?
                        <>
                            <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-8 px-0 mx-0"> 
                                <h3>{certTitle}</h3>
                                <p className="certificate-subtitle"><span id="certificate-subtitle" className="italics">{certSubtitle}<br className="subtitle-break" /> </span><span className="bullet-point"></span> {certDuration}</p>
                            </div>
                            <div id="certificate-badge-col" className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 px-0 mx-0">
                                <img className="certificate-badge" src={`${certBadgeSrc}`} alt={`Certificate badge for: ${certSubtitle}`} />
                            </div>
                        </>
                        : 
                        <>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-12 px-0 mx-0">
                            <h3>{certTitle}</h3>
                            <p className="certificate-subtitle"><span className="italics">{certSubtitle}<br className="subtitle-break" /> </span><span className="bullet-point"></span> {certDuration}</p>
                        </div>
                    </>
                }
            </div>
            <div className="row">
                <div className="col-12 px-0 mx-0"> {/* Set padding and margin to 0 */}
                    <p className="certificate-description">{certDescription}</p>
                    <div className="certificate-button mx-0"> {/* Set padding and margin to 0 */}
                        <DownloadButton src={certSrc} buttonType="certificate" downloadName={certTitle} title="Download Certificate" />
                    </div>
                </div>
            </div>
        </div>
    );
    
}