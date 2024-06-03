export default function SearchableList({ items }) {
    return (
        <div className="searchable-list">
            <input type="search" placeholder="search" />
            <ul>{}</ul>
        </div>
    )
}
