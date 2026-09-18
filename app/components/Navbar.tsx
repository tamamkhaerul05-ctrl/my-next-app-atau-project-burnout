import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-600">Project Burnout 🧠</h1>
        <div className="flex gap-6 font-medium text-gray-600">
          <Link href="/" className="hover:text-teal-600">Beranda</Link>
          <Link href="/asesmen" className="hover:text-teal-600">Asesmen</Link>
          <Link href="/journaling" className="hover:text-teal-600">Journaling</Link>
          <Link href="/edukasi" className="hover:text-teal-600">Edukasi</Link>
          <Link href="/laporan" className="hover:text-teal-600">Laporan</Link>
        </div>
      </div>
    </nav>
  );
}