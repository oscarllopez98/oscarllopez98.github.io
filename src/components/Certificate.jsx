export default function Certificate({ cert }) {

    const certID = cert.id;
    const certTitle = cert.title;
    const certSubtitle = cert.subtitle;
    const certDuration = cert.duration;
    const certDescription = cert.description;


    return (<>
        <div id={'certificate-' + certID} className="certificate col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
            <h3>{certTitle}</h3>
            <p><span className="italics">{certSubtitle}</span> <span className="bullet-point"></span> {certDuration}</p>
            <p>{certDescription}</p>
        </div>
    </>);
}