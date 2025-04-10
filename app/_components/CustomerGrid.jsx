'use client';

export default function CustomerGrid({ customers }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Customers</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="border p-4 rounded-md shadow-sm bg-white"
          >
            <p>
              <strong>{customer.name}</strong>
            </p>
            <p className="text-sm text-gray-600">{customer.phone}</p>
            <p className="text-sm text-gray-600">{customer.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
