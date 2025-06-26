'use client'

import { useState } from 'react'
import axios from '@/lib/axios'

export default function ProductForm({ onSuccess }) {
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [cost, setCost] = useState('')
  const [profit, setProfit] = useState('')

  const handleSubmit = async () => {
    const profitPercent = parseFloat(profit)
    const costPrice = parseFloat(cost)
    const sellingPrice = costPrice + (costPrice * profitPercent / 100)

    await axios.post('/stores/products/', {
      name,
      cost: costPrice,
      profit_percent: profitPercent,
      stock: parseInt(stock),
      category: 'default',
      units_sold: 0,
      selling_price: sellingPrice,
    })

    setName('')
    setStock('')
    setCost('')
    setProfit('')
    onSuccess()
  }

  return (
    <div className="space-y-2">
      <input className="border w-full p-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="border w-full p-2" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
      <input className="border w-full p-2" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} />
      <input className="border w-full p-2" placeholder="Profit %" value={profit} onChange={(e) => setProfit(e.target.value)} />
      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded">Add Product</button>
    </div>
  )
}
