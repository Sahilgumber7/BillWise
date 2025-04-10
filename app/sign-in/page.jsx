'use client';

import { redirect } from 'next/navigation';

export default function LoginPage() {
  // Replace this with actual login UI and logic
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => {
          // Dummy login redirect or call your login function (e.g. signIn() from NextAuth)
          window.location.href = '/dashboard';
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login to Continue
      </button>
    </div>
  );
}
