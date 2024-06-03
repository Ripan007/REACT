import { useState } from 'react'

export default function SearchableList({ items }) {
    const [searchTerm, setSearchTerm] = useState()
    const searchResults = function handleChange(event) {
        setSearchTerm(event.target.value)
    }
    return (
        <div className="searchable-list">
            <input type="search" placeholder="search" onChange={handleChange} />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.toString()}</li>
                ))}
            </ul>
        </div>
    )
}
