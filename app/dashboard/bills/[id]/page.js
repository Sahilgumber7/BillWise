'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from '@/lib/axios'

export default function BillDetailsPage() {
  const { id } = useParams()
  const [bill, setBill] = useState(null)

  useEffect(() => {
    axios.get(`/stores/bills/${id}/`).then((res) => setBill(res.data))
  }, [id])

  if (!bill) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Bill #{bill.id}</h1>
      <ul className="space-y-2">
        {bill.items.map((item, index) => (
          <li key={index} className="border p-2 rounded">
            Product: {item.product_name} <br />
            Quantity: {item.quantity} <br />
            Price: ₹{item.price}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">Total: ₹{bill.total}</p>
    </div>
  )
}
