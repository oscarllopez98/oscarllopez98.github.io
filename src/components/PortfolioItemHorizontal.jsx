export default function PortfolioItemHorizontal({ item }) {
    return (
        <>
            <div id={item['id']} className="card">
                <a href={item['href']} target="_blank">
                    <img src={item['thumbnailSrc']} alt={item['alt']} className="card-img-top item-horizontal" />
                </a>
                <div className="card-body item-horizontal-card-body">
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