import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsPage() {
    const PRODUCTS = [
        {
            id: 'p1',
            title: 'product 1',
        },
        { id: 'p2', title: 'product 2' },
        { id: 'p3', title: 'product 3' },
    ]
    return (
        <>
            <h1>Products page</h1>;
            <ul>
                {PRODUCTS.map(prod => (
                    <Link key={prod.id} to={`/products/${prod.id}}`}>
                        {prod.title}
                    </Link>
                ))}
            </ul>
        </>
    )
}
