import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetailsPage() {
    const params = useParams()
    return (
        <div>
            <h1>product detail page</h1>
            <p>{params.productId}</p>
        </div>
    )
}
