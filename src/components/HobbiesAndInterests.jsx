import HobbiesAndInterestsVerticalItem from "./HobbiesAndInterestsVerticalItem";

const guitar = {
    id: 'item-guitar',
    title: 'Guitar',
    text: 'Here\'s a fun outtake of a recording session for one of my favorite songs, The Heart of Life by John Mayer. I enjoy writing music too. Check out my Instagram to see more!',
    href: 'https://drive.google.com/file/d/1o6BAaVSxAffCadViYfwfTlpx7PL-bzb4/view?usp=sharing',
    thumbnailSrc: 'src/assets/thumbnails/guitar-thumbnail.png'
};

const improv = {
    id: 'item-improv',
    title: 'Improv',
    text: 'This video shows a short improv scene where the infamous Tony Hops shows why he is of his name. This is improv, so this was all done completely without any planning whatsoever!',
    href: 'https://drive.google.com/file/d/1Xcr1TfETr0R86Xc5bxksLtgb19GrujO1/view?usp=sharing',
    thumbnailSrc: 'src/assets/thumbnails/improv-thumbnail.png'
};

const standup = {
    id: 'item-standup',
    title: 'Stand-Up',
    text: 'I wrote and performed a 5 minutes comedy stand-up routine at Laugh\'s Comedy Club in Seattle, WA. This was one of the scariest, yet most fun activities I\'ve ever done!',
    href: 'https://drive.google.com/file/d/1pru1s7AnsBTl7C9-fZBG7DBU3QjzyLeN/view?usp=sharing',
    thumbnailSrc: 'src/assets/thumbnails/standup-thumbnail.png'
};

export default function HobbiesAndInterests() {
    return (<>
        <div id="hobbies-and-interests">
            <div id="hobbies-and-interests-container">
                <h2 className="h2 pb-4">Hobbies and Interests</h2>
                <div className="grid-container-hai">
                    <HobbiesAndInterestsVerticalItem item={guitar}/>
                    <HobbiesAndInterestsVerticalItem item={improv}/>
                    <HobbiesAndInterestsVerticalItem item={standup}/>
                </div>
            </div>
        </div>
    </>);
}