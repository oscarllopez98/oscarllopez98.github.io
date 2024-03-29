export default function WorkExperience({ job }) {

    const id = job.id;
    const organization = job.organization;
    const position = job.position;
    const duration = job.duration;

    return (<>
        <div id={'certificate-' + id} className="work-experience col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
            <h3>{organization}</h3>
            <p className="work-experience-position"><span className="italics">{position}<br className="position-break"/></span> <span className="bullet-point"></span> {duration}</p>
            <ul className="work-experience-description">
                {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </>);
}