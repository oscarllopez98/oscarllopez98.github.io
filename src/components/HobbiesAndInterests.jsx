import HobbiesAndInterestsVerticalItem from "./HobbiesAndInterestsVerticalItem";

const guitar = {
    id: 'item-guitar',
    title: 'Guitar',
    text: 'No text yet',
    href: 'https://drive.google.com/file/d/1o6BAaVSxAffCadViYfwfTlpx7PL-bzb4/view?usp=sharing',
    thumbnailSrc: 'src/assets/thumbnails/guitar-thumbnail.png'
};

const improv = {
    id: 'item-improv',
    title: 'Improv',
    text: 'No text yet',
    href: 'https://drive.google.com/file/d/1Xcr1TfETr0R86Xc5bxksLtgb19GrujO1/view?usp=sharing',
    thumbnailSrc: 'src/assets/thumbnails/improv-thumbnail.png'
};

const standup = {
    id: 'item-standup',
    title: 'Standup',
    text: 'No text yet',
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