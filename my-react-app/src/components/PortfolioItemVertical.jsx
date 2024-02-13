export default function PortfolioItemVertical({ item }) {
    return (
        <>
            <div id={item['id']} class="card">
                <div class="card-body">
                    <h5 class="card-title">{item['title']}</h5>
                    <p class="card-text lead">{item['text']}</p>
                    <p class="card-text">
                        <small className="text-muted">Skills</small><br />
                        <small class="text-muted">
                            {item['skills'].map(skill => skill).join(', ')}
                        </small>
                    </p>
                </div>
                <a href={item['href']}>
                    <img src={item['thumbnailSrc']} alt={item['alt']} className="card-img-bottom item-vertical" />
                </a>
            </div>
        </>
    );
}