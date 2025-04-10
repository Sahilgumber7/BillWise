'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-4">
        Welcome to <span className="text-blue-600">BillWise</span>
      </h1>
      <p className="text-gray-600 text-center max-w-xl mb-8">
        Simplify your billing process. Manage products, customers, and generate invoices all in one place.
      </p>

      <div className="flex gap-4">
        <Link href="/sign-in">
          <Button className="text-white bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </Link>
        <Button variant="outline" disabled>
          Learn More (Coming Soon)
        </Button>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-400">
        © {new Date().getFullYear()} BillWise. All rights reserved.
      </footer>
    </main>
  );
}
