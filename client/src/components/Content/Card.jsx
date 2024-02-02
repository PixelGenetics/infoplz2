import './Card.css'

const Card = (item) => {
    console.log("items: ", item)

    return (
        <div className="extra-blogs">
            <div className="inner-extra-blogs">
                <h2>{item.item.content_author}</h2>
                <h3>{item.item.content_title}</h3>
                <p>{item.item.content_parrafo}</p>
            </div>
        </div>
    )
}

export default Card
