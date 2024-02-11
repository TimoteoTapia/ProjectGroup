import { fetchUserByEmail } from '@/app/lib/data';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function ProfilePage() {
  const user = await auth();
  // User return this output: {user:{ name: 'John Doe', email:'johndoe@gmail.com'}, expires: '2023-03-01'}
  console.log(user);
  const userEmail = user?.user?.email as string;

  const fetchUser = await fetchUserByEmail(userEmail);

  console.log(fetchUser);

  return (
    <section
      style={{ fontFamily: 'Montserrat' }}
      className="flex h-screen items-center justify-center bg-green-800 font-medium"
    >
      <section className="mx-auto w-64 rounded-2xl bg-gray-100 px-8 py-6 shadow-lg">
        <div className="mx-auto mt-6 w-fit">
          {/* Placeholder para la foto del usuario */}
          <img
            src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
            className="w-28 rounded-full "
            alt="profile picture"
          />
        </div>

        <div className="mt-8 ">
          {/* Mostrar el nombre y correo del usuario */}
          <h2 className="text-2xl font-bold tracking-wide text-black">
            {fetchUser?.firstName} {fetchUser?.lastName}
            <br />
            {fetchUser?.email}
          </h2>
        </div>
        <p className="mt-2.5 font-semibold text-emerald-400">Active</p>

        <div className="mt-8 h-1 w-full rounded-full bg-black">
          <div className="h-1 w-2/5 rounded-full bg-yellow-500 "></div>
        </div>
        {/* <div className="mt-3 text-sm text-white">
          <span className="font-semibold text-gray-400">Storage:</span>
          <span>40%</span>
        </div> */}
        {/* Botón con estilo tailwind */}
        <button className="focus:shadow-outline mt-6 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
          <Link href="/dashboard/profile/products">
            <span className="hidden md:block">Settings</span>{' '}
          </Link>
        </button>
        <button className="focus:shadow-outline mt-6 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
          <Link href="/dashboard/profile/reviews">
            <span className="hidden md:block">Review</span>{' '}
          </Link>
        </button>
      </section>
    </section>
  );
}
