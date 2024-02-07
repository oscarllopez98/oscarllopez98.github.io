import SocialMediaButtons from "./SocialMediaButtons";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <div id="home" className="test-mode">
            <Navbar/>
            <h1>I'm Oscar Lopez.</h1>
            <p>Description</p>
            <SocialMediaButtons/>
            <p>Navigation Arrow</p>
        </div>
    );
}