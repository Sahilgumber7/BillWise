'use client'

import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

export default function CreateBill() {
  const [products, setProducts] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    axios.get('/stores/products/').then((res) => setProducts(res.data))
  }, [])

  const handleAddProduct = (product) => {
    const quantity = prompt(`Enter quantity for ${product.name}`)
    if (quantity) {
      setSelectedItems([...selectedItems, { product_id: product.id, quantity: parseInt(quantity) }])
    }
  }

  const handleSubmit = async () => {
    await axios.post('/stores/bills/create/', {
      items: selectedItems,
    })
    alert('Bill created')
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Create Bill</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="border p-2 rounded">
            <div>{product.name} – ₹{product.selling_price}</div>
            <button onClick={() => handleAddProduct(product)} className="text-sm text-blue-600">Add</button>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-semibold">Selected Items:</h2>
        <ul className="list-disc list-inside">
          {selectedItems.map((item, i) => (
            <li key={i}>Product ID: {item.product_id}, Quantity: {item.quantity}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSubmit} className="bg-green-600 text-white p-2 rounded">Submit Bill</button>
    </div>
  )
}
