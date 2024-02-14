import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaButtons() {
    return (
        <>
            <ul id="social-media-buttons">
                <li>
                    <a href="https://www.linkedin.com/in/oscar-lopez-b3b48a141/" className='social-media-icon' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/oscarllopez/" className='social-media-icon' target="_blank"><FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="https://gitlab.com/oscarllopez98" className='social-media-icon' target="_blank"><FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </>
    );
}