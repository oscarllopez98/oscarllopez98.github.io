import { useRef } from "react";

export default function DownloadButton({ title='Title Not Set', pathToDownload='#', buttonType='none' }) {

    return (
        <>
        <button className={"btn btn-primary button-"+buttonType} href={pathToDownload}>{title}</button>
        </>
    );
}