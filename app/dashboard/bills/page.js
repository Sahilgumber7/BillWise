'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Link from 'next/link'

export default function BillsPage() {
  const [bills, setBills] = useState([])

  useEffect(() => {
    const fetchBills = async () => {
      const res = await axios.get('/stores/bills/')
      setBills(res.data)
    }
    fetchBills()
  }, [])

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bills</h1>
      <Link href="/dashboard/bills/create" className="text-blue-600 underline">+ Create New Bill</Link>
      <ul className="space-y-2">
        {bills.map((bill) => (
          <li key={bill.id} className="border p-2 rounded">
            <Link href={`/dashboard/bills/${bill.id}`}>
              Bill #{bill.id} – Total: ₹{bill.total}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
