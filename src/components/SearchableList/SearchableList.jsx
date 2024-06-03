import { useState } from 'react'

export default function SearchableList({ items }) {
    const [searchTerm, setSearchTerm] = useState()
    return (
        <div className="searchable-list">
            <input type="search" placeholder="search" />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.toString()}</li>
                ))}
            </ul>
        </div>
    )
}
