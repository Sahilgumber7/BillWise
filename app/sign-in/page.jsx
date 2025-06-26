'use client'

import { useState } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const res = await axios.post('/auth/stores/login/', { email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('store_id', res.data.store_id)
      router.push('/dashboard')
    } catch (err) {
      alert('Login failed')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-4">
      <h2 className="text-xl font-bold">Store Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border w-full p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border w-full p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-black text-white p-2 rounded w-full">
        Login
      </button>
    </div>
  )
}
