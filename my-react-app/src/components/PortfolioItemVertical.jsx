export default function PortfolioItemVertical({ item }) {
    return (
        <>
            <a href={item['href']}>
                <img id={item['id']} src={item['thumbnailSrc']} alt={item['alt']} className="img-fluid"/>
            </a>
        </>
    );
}