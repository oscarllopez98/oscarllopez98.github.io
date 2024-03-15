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
        title: 'Trophy - Android',
        href: 'https://drive.google.com/file/d/1KXSNh4wBloaf5DOmCBWUax9bKdHCEOpz/view?usp=sharing',
        thumbnailSrc: 'src/assets/thumbnails/TrophyTeam_Thumbnail.png',
        alt: 'TrophyTeam Project Thumbnail',
        text: 'Android Application, utilizing Java, XML, and Google Firebase, that allows users to track cardio workouts in a user-friendly environment. Users can create and remove exercises. Click the image to see a demo!',
        skills: ['Android Development', 'Java', 'XML', 'Mobile Development', 'Cloud Database', 'Figma']
    }

    const CALCULATOR = {
        id: 'item-calculator',
        title: 'React Calculator',
        href: 'https://drive.google.com/file/d/1m20qNo-hwBRo5fabnqFEpKmOkeEJhRMa/view?usp=sharing',
        thumbnailSrc: 'src/assets/react-calculator-thumbnail.png',
        alt: 'React Calculator Project Thumbnail',
        text: 'React course independent project dedicated for exercising state management, conditional output, props, and user input. Click the image to see a demo!',
        skills: ['React', 'State', 'Conditional Output', 'User Input Handling', 'Components', 'Props']  
    }

    const TIC_TAC_TOE = {
        id: 'item-tic-tac-toe',
        title: 'React Tic-Tac-Toe',
        href: 'https://drive.google.com/file/d/1pfOksFKYrtHduKEykPAM-vIQ2vLvG3-7/view?usp=sharing',
        thumbnailSrc: 'src/assets/tic-tac-toe-thumbnail.png',
        alt: 'React Tic-Tac-Toe Project Thumbnail',
        text: 'React course independent project dedicated for exercising state management, props, and user input. Click the image to see a demo!',
        skills: ['React', 'Multiple States', 'Conditional Output', 'User Input Handling', 'Components', 'Props', 'Game logic']  
    }

    const IOS_TROPHY = {
        id: 'item-ios-trophy',
        title: 'Trophy - iOS',
        href: 'https://drive.google.com/file/d/1XLULtfyo_SGpCxH-LduXSWSue9_EKtpH/view?usp=sharing',
        thumbnailSrc: 'src/assets/ios-trophy-thumbnail.png',
        alt: 'iOS Trophy Thumbnail',
        text: 'iOS Application, utilizing Swift, Xcode, Software Engineering best practices, that allows the user to flexibly track any type of workout they choose in a UI friendly way. Click the image to see a demo or visit my Github Trophy repo to read more!',
        skills: ['iOS Development','Software Engineering','MVVM Architecture','Unit Testing','State Management','Data Structures','Factory','Singleton','Swift','Xcode','Database Management','Database Design','UML','UI Design','Figma','Git','Linux']
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
                        <PortfolioItemVertical item={IOS_TROPHY}/>
                        <PortfolioItemHorizontal item={CALCULATOR} />
                        <PortfolioItemHorizontal item={TIC_TAC_TOE} />
                    </div>
                </div>
            </div>
        </>
    );
}