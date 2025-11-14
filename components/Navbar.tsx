// components/Navbar.tsx
import Link from "next/link";

export function Navbar() {    // ✅ named export
  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          Biosense Forge
        </Link>
        <div className="flex gap-6">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/datasets">Datasets</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/account">Account</Link>
        </div>
      </div>
    </nav>
  );
}
