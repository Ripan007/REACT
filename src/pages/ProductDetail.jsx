import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetailsPage() {
    const params = useParams()
    return (
        <div>
            <h1>product detail page</h1>
            <h2>{params.productId}</h2>
            <p>
                <Link to=".." relative="path">
                    back
                </Link>
            </p>
        </div>
    )
}
