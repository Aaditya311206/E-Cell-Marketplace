export default function ListingCard ({ title, price, type, seller, dept, onClick }){
    return (
        <div onClick={onClick}>
            <div>
                <p>{title}</p>
                <p>{price}</p>
            </div>
            <div>
                <span>{seller}</span>
                <span>{dept}</span>
                <span>{type}</span>
            </div>
        </div>
    )
}