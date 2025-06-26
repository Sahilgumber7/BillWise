'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import ProductForm from '@/components/ProductForm'

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await axios.get('/stores/products/')
    setProducts(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <ProductForm onSuccess={fetchProducts} />
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.name}</h2>
            <p>Stock: {product.stock}</p>
            <p>Price: ₹{product.selling_price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
