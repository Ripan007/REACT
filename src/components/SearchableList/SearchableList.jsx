import { useState } from 'react'

export default function SearchableList({ items, itemKeyFun, children }) {
    const [searchTerm, setSearchTerm] = useState('')
    const searchResults = items.filter(item =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    )

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }
    return (
        <div className="searchable-list">
            <input type="search" placeholder="search" onChange={handleChange} />
            <ul>
                {searchResults.map(item => (
                    <li key={itemKeyFun(item)}>{children(item)}</li>
                ))}
            </ul>
        </div>
    )
}
