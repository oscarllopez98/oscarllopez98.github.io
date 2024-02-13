export default function PortfolioItemHorizontal({ item }) {
    return (
        <>
            <div id={item['id']} class="card">
                <a href={item['href']}>
                    <img src={item['thumbnailSrc']} alt={item['alt']} className="card-img-top item-horizontal" />
                </a>
                <div class="card-body item-horizontal-card-body">
                    <h5 class="card-title">{item['title']}</h5>
                    <p class="card-text lead">{item['text']}</p>
                </div>
            </div>
        </>
    );
}