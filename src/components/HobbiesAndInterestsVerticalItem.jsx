export default function HobbiesAndInterestsVerticalItem({ item }) {
    return (<>
        <div id={item['id']} className="card">
            <a href={item['href']} target="_blank" className="item-vertical-container">
                <img src={item['thumbnailSrc']} alt={item['alt']} className="card-img-top item-vertical" />
            </a>
            <div className="card-body">
                <h5 className="card-title">{item['title']}</h5>
                <p className="card-text lead">{item['text']}</p>
            </div>
        </div>
    </>);
}