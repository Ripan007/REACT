export default function SearchableList({ items }) {
    return (
        <div className="searchable-list">
            <input type="search" placeholder="search" />
            <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
