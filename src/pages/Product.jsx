import React from 'react'

export default function ProductsPage() {
    const product = [
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
                <li>products 1</li>
                <li>products 2</li>
                <li>products 3</li>
            </ul>
        </>
    )
}
