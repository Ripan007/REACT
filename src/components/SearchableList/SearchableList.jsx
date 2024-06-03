import { useState } from 'react'

export default function SearchableList({ items, itemKeyFun, children }) {
    const [searchTerm, setSearchTerm] = useState('')
    const searchResults = items.filter(item =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    )

    function handleChange(event) {
        setTimeout(() => {
            setSearchTerm(event.target.value)
        }, 500)
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
