import { useRef } from "react";

export default function DownloadButton({ title, pathToDownload, buttonType }) {

    return (
        <>
        <button className={"button-"+buttonType} href={pathToDownload}>{title}</button>
        </>
    );
}