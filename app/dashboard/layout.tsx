import SideNav from '@/app/ui/dashboard/sidenav';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        <div className="absolute right-4 top-4 mr-4">
          <Link
            href="/dashboard/profile"
            className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-blue-600"
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
