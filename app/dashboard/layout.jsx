export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <ul className="space-y-2">
          <li><a href="/dashboard/products">Products</a></li>
          <li><a href="/dashboard/bills">Bills</a></li>
          <li><button onClick={() => {
            localStorage.clear()
            window.location.href = "/login"
          }}>Logout</button></li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  )
}
