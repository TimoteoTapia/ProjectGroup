import { fetchUserByEmail } from '@/app/lib/data';
import { CreateProductButton } from '@/app/ui/profile/Buttons';
import ProductProfileComponent from '@/app/ui/profile/ProductsProfile';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function ProductsProfilePage() {
  const user = await auth();
  // User variable return this output: {user:{ name: 'John Doe', email:'johndoe@gmail.com'}, expires: '2023-03-01'}
  const userEmail = user?.user?.email as string;

  const fetchUser = await fetchUserByEmail(userEmail);

  const userId = fetchUser?.id as string;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <div className="ml-5">
          <CreateProductButton />
        </div>
      </div>
      <div className="flex-column flex">
        <ProductProfileComponent id={userId} />
      </div>
    </>
  );
}
