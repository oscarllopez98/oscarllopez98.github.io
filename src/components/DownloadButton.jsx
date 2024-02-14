import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export default function DownloadButton({ title = 'Title Not Set', pathToDownload = '#', buttonType = 'none', downloadName }) {

    return (
        <>
            <button className={"btn btn-primary button-" + buttonType}>
                <FontAwesomeIcon icon={faDownload}/>
                <a href={pathToDownload} download={downloadName}>{title}</a>
            </button>
        </>
    );
}