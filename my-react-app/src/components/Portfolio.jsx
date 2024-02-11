import PortfolioItemHorizontal from "./PortfolioItemHorizontal";
import PortfolioItemVertical from "./PortfolioItemVertical";

export default function Portfolio() {

    const HCI = {
        id: 'portfolio-item-HCI',
        href: 'https://oscarllopez98.github.io/HCITermProject/index.html',
        thumbnailSrc: 'src/assets/thumbnails/HCI_Thumbnail.png',
        alt: 'HCI Project Thumbnail'
    }

    const TROPHY = {
        id: 'portfolio-item-trophy',
        href: 'https://drive.google.com/file/d/1KXSNh4wBloaf5DOmCBWUax9bKdHCEOpz/view?usp=sharing',
        thumbnailSrc: 'src/assets/thumbnails/TrophyTeam_Thumbnail.png',
        alt: 'TrophyTeam Project Thumbnail'
    }

    return (
        <>
            <div id="portfolio">
            <h2 className="h2 text-center pb-5"> Portfolio</h2>
                <div className="container">

                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col">
                                    <PortfolioItemHorizontal item={HCI} />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div id="portfolio-item-text-HCI" className="col-6">
                                    <p className="lead portfolio-text">
                                        Human-Computer Interaction Term Project Homepage.
                                        I am hosting the Pear Programming team homepage,
                                        which holds milestone/deliverable updates for my team's project.
                                        Click the image to see more!
                                    </p>
                                </div>
                                <div id="portfolio-item-text-trophy" className="col-6">
                                    <p className="lead portfolio-text">
                                        Android Application, utilizing Java, XML, and Google Firebase,
                                        that allows users to track cardio workouts in a user-friendly environment.
                                        Users can create and remove exercises.
                                        Click the image to see a demo!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <PortfolioItemVertical item={TROPHY} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}