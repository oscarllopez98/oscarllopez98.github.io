import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export default function DownloadButton({ title = 'Title Not Set', src = '#', buttonType = 'none', downloadName }) {

    return (
        <>
            <button className={"btn btn-primary button-" + buttonType}>
                <FontAwesomeIcon icon={faDownload}/>
                <a href={src} download={downloadName}>Download Certificate</a>
            </button>
        </>
    );
}