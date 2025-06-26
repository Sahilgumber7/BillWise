'use client'

import { useState } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', location: '' })
  const router = useRouter()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleRegister = async () => {
    try {
      const res = await axios.post('/auth/stores/register/', form)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('store_id', res.data.store_id)
      router.push('/dashboard')
    } catch (err) {
      alert('Registration failed')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-4">
      <h2 className="text-xl font-bold">Store Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="border w-full p-2" />
      <input name="email" placeholder="Email" onChange={handleChange} className="border w-full p-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border w-full p-2" />
      <input name="location" placeholder="Location" onChange={handleChange} className="border w-full p-2" />
      <button onClick={handleRegister} className="bg-black text-white p-2 rounded w-full">
        Register
      </button>
    </div>
  )
}
