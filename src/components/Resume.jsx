import Certificate from "./Certificate";
import WorkExperience from "./WorkExperience";

export default function Resume() {

    // CERTIFICATE SECTION

    //AWS Cloud Practitioner Certificate
    const awsCloudPractitioner = {
        id: 'cloud-practitioner',
        title: 'Amazon Web Services (AWS)',
        subtitle: 'AWS Certified Cloud Practitioner',
        duration: 'January 2024',
        description: 'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.',
        src: 'src/assets/AWS-Certified-Cloud-Practitioner-certificate.pdf'
    };

    //AWS Certified Developer Certificate
    const awsDeveloperAssociate = {
        id: 'developer-associate',
        title: 'Amazon Web Services (AWS)',
        subtitle: 'AWS Certified Developer — Associate',
        duration: 'March 2024',
        description: 'Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices.',
        src: 'src/assets/AWS-Certified-Developer-Associate-certificate.pdf'
    };


    // JOB SECTION

    //Amazon Prime
    const amazonPrime = {
        id: 'amazon-prime',
        organization: 'Amazon - Prime',
        position: 'Quality Assurance Engineer',
        duration: 'June 2021 - December 2023',
        description: [
            'Led a collaborative QA process across 5 cross-organizational teams for mission critical project, resulting in the creation of a cohesive group test strategy, test plans, and a comprehensive test suite comprising 300+ mobile app test cases. Spearheaded weekly bug triage meetings, identifying key issues and ensuring their ownership, management, and resolution, which led to the successful scheduling and fixing of 30+ bugs, resulting in a P0 complete project launch. Additionally, I successfully executed tests across 3 international marketplaces, ensuring consistent quality and clear communication across different regions.',
            'Conceptualized and proposed component design for an internal AWS microservice extension integrated with our existing test automation, aiming to significantly reduce manual effort across 20+ marketplaces to nearly 0%. The proposed design was approved by a collaborative team of QA Engineers, Senior QA Engineer, and Software Developer, showcasing its potential for streamlined automation processes.',
            'Designed and automated functional testing for a launch project involving 640+ test cases launching in 20 countries. Leveraged Java, Selenium web framework, and the Page Object Model (POM) design pattern to achieve a 50% reduction in testing time and a 90% decrease in manual testing involvement.',
            'Managed and maintained a comprehensive regression test suite for 10 upsell locations, ensuring consistent functionality, reliability, and supporting CI/CD pipelines across 20+ marketplaces.'
        ]
    }

    //University of Georgia - Ramsey Student Center (Program Assistant)
    const ugaPA = {
        id: 'uga-pa',
        organization: 'University of Georgia - Ramsey Student Center',
        position: 'Program Assistant',
        duration: 'February 2019 - December 2020',
        description: [
            'Identified a process problem and built a program using Python and a pandas library to web scrape machine parts on vendor websites to successfully create a centralized location optimizing process by 75%.',
            'Co-led interview process by assessing needs for hard and soft skills with the Manager, interviewing 6 candidates, and delivering my recommendations to the Manager to successfully hire 4 out of 6 candidates.',
            'Manage 8 person facility technician team, review employee schedules, conduct technical training for 6 technicians, and report any issues to Coordinator of Facilities for resolution.'
        ]
    }

    //University of Georgia - Ramsey Student Center (Facility Tech)
    const ugaTech = {
        id: 'uga-tech',
        organization: 'University of Georgia - Ramsey Student Center',
        position: 'Facility Technician',
        duration: 'October 2017 - January 2019',
        description: [
            'Applied advanced solutions to fix machines by working with Facility Technician Program Assistant, identifying and asking management for additional training, and documenting solutions.'
        ]
    }

    const nasa = {
        id: 'nasa',
        organization: 'NASA Headquarters',
        position: 'Mission Support Intern',
        duration: 'June 2017 - August 2017',
        description: [
            'Collaborated with a team of 3 interns to gather requirements, propose, and develop a software solution to shorten the Office of the Chief Financial Officer’s onboarding process using Confluence.',
            'Implemented 2 web pages by documenting user needs, organizing information, and testing for bugs.',
            'Presented software solution PowerPoint to leadership in the Office of the Chief Financial Officer.'
        ]
    }

    return (<>

        <div id="resume">
            <div id="resume-container" className="container">
                <div id="education">
                    <div id="education-row" className="row">
                        <div id="education-section-header" className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                            <h4><span>Education</span></h4>
                        </div>
                        <div id="education-section-content" className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                            <h3>University of Georgia</h3>
                            <p className="education-subtitle"><span className="italics">B.S. Computer Science<br className="subtitle-break"/></span> <span className="bullet-point"></span> December 2020</p>
                            <p className="education-description">At the University of Georgia, I enrolled as a Computer Science major, where I actively engaged in learning skills to develop my Software Engineering and Web Development skills, including the Software Lifecycle, Data Structures, and Algorithms.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div id="certificate-section-header" className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                            <h4><span>Certificates</span></h4>
                        </div>
                        <div id="certificate-section-content" className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                            <Certificate cert={awsDeveloperAssociate} />
                            <Certificate cert={awsCloudPractitioner} />
                        </div>
                    </div>
                </div>
                <div id="work-experience">
                    <div id="work-experience-row" className="row">
                        <div id="work-history-section-header" className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                            <h4><span>Work</span></h4>
                        </div>
                        <div id="work-history-section-content" className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                            <WorkExperience job={amazonPrime} />
                            <WorkExperience job={ugaPA} />
                            <WorkExperience job={ugaTech} />
                            <WorkExperience job={nasa} />
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </>);
}

