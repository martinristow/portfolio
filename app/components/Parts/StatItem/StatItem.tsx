const StatItem = ({title, description}: StatItemData) => {

    return (
        <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="uppercase tracking-widest text-md">{description}</p>
        </div>
    )
}
export default StatItem;