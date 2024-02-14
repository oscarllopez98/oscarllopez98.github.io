import PortfolioItemHorizontal from "./PortfolioItemHorizontal";
import PortfolioItemVertical from "./PortfolioItemVertical";

export default function Portfolio() {


    const HCI = {
        id: 'item-HCI',
        title: 'Pear Programming',
        href: 'https://oscarllopez98.github.io/HCITermProject/index.html',
        thumbnailSrc: 'src/assets/thumbnails/HCI_Thumbnail.png',
        alt: 'HCI Project Thumbnail',
        text: 'Human-Computer Interaction Term Project Homepage. I am hosting the Pear Programming team homepage, which holds milestone/deliverable updates for my team\'s project. Click the image to see more!',
        skills: ['UX Design', 'Front-End Design/Development', 'Web Development', 'IRB Training', 'Figma', 'Ideation', 'Prototyping']
    }

    const PERSONAL_WEBSITE = {
        id: 'item-personal-site',
        title: 'Personal Website',
        href: 'https://gitlab.com/oscarllopez98/personalsite',
        thumbnailSrc: 'src/assets/home-screenshot.png',
        alt: 'Personal Website Screenshot',
        text: 'This website was coded to flex my skills with React! Using React, Bootstrap, and other libraries, I designed and developed this site to test the React fundamentals including State, Components, Props, and JSX. Click the image to view the repo!',
        skills: ['React', 'State Management', 'Web Development', 'Bootstrap', 'CSS3', 'HTML5', 'Javascript', 'Media Query', 'CSS Grid Layout', 'GitLab']
    }

    const TROPHY = {
        id: 'item-trophy',
        title: 'Trophy',
        href: 'https://drive.google.com/file/d/1KXSNh4wBloaf5DOmCBWUax9bKdHCEOpz/view?usp=sharing',
        thumbnailSrc: 'src/assets/thumbnails/TrophyTeam_Thumbnail.png',
        alt: 'TrophyTeam Project Thumbnail',
        text: 'Android Application, utilizing Java, XML, and Google Firebase, that allows users to track cardio workouts in a user-friendly environment. Users can create and remove exercises. Click the image to see a demo!',
        skills: ['Android Development', 'Java', 'XML', 'Mobile Development', 'Cloud Database', 'Figma']
    }

    return (
        <>
            <div id="portfolio">
                <div id="portfolio-container">
                    <h2 className="h2 pb-4">Portfolio</h2>
                    <div className="grid-container">
                        <PortfolioItemHorizontal item={HCI} />
                        <PortfolioItemHorizontal item={PERSONAL_WEBSITE} />
                        <PortfolioItemVertical item={TROPHY} />
                    </div>
                </div>
            </div>
        </>
    );
}