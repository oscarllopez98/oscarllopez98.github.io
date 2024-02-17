export default function PortfolioItemVertical({ item }) {
    return (
        <>
            <div id={item['id']} className="card">
                <a href={item['href']} target="_blank" className="item-vertical-container">
                    <img src={item['thumbnailSrc']} alt={item['alt']} className="card-img-top item-vertical" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{item['title']}</h5>
                    <p className="card-text lead">{item['text']}</p>
                    <p className="card-text">
                        <small className="text-muted">Skills</small><br />
                        <small className="text-muted">
                            {item['skills'].map(skill => skill).join(', ')}
                        </small>
                    </p>
                </div>
            </div>
        </>
    );
}