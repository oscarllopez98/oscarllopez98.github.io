import PortfolioItemHorizontal from "./PortfolioItemHorizontal";
import PortfolioItemVertical from "./PortfolioItemVertical";

export default function Portfolio() {


    const HCI = {
        id: 'item-HCI',
        title: 'Pear Programming',
        href: 'https://oscarllopez98.github.io/HCITermProject/index.html',
        thumbnailSrc: 'src/assets/thumbnails/HCI_Thumbnail.png',
        alt: 'HCI Project Thumbnail',
        text: 'Human-Computer Interaction Term Project Homepage. I am hosting the Pear Programming team homepage, which holds milestone/deliverable updates for my team\'s project. Click the image to see more!'
    }

    const HCI_2 = {
        id: 'item-HCI2',
        title: 'Pear Programming',
        href: 'https://oscarllopez98.github.io/HCITermProject/index.html',
        thumbnailSrc: 'src/assets/thumbnails/HCI_Thumbnail.png',
        alt: 'HCI Project Thumbnail',
        text: 'Human-Computer Interaction Term Project Homepage. I am hosting the Pear Programming team homepage, which holds milestone/deliverable updates for my team\'s project. Click the image to see more!'
    }

    const TROPHY = {
        id: 'item-trophy',
        title: 'Trophy',
        href: 'https://drive.google.com/file/d/1KXSNh4wBloaf5DOmCBWUax9bKdHCEOpz/view?usp=sharing',
        thumbnailSrc: 'src/assets/thumbnails/TrophyTeam_Thumbnail.png',
        alt: 'TrophyTeam Project Thumbnail',
        text: 'Android Application, utilizing Java, XML, and Google Firebase, that allows users to track cardio workouts in a user-friendly environment. Users can create and remove exercises. Click the image to see a demo!'
    }

    return (
        <>
            <div id="portfolio">
                <div id="portfolio-container">
                    <h2 className="h2 pb-4">Portfolio</h2>
                    <div className="grid-container">
                        <PortfolioItemHorizontal item={HCI} />
                        <PortfolioItemHorizontal item={HCI_2} />
                        <PortfolioItemVertical item={TROPHY} />
                    </div>
                </div>
            </div>
        </>
    );
}