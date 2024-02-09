import { fetchUserByEmail } from '@/app/lib/data';
import { auth } from '@/auth';

export default async function ProfilePage() {
  const user = await auth();
  // User return this output: {user:{ name: 'John Doe', email:'johndoe@gmail.com'}, expires: '2023-03-01'}
  console.log(user);
  const userEmail = user?.user?.email as string;

  const fetchUser = await fetchUserByEmail(userEmail);

  console.log(fetchUser);

  return (
    <>
      <div>
        <h1>Profile</h1>
        <p>Profile page content</p>
      </div>
        <div>
            <h2>{fetchUser?.firstName} {fetchUser?.lastName}</h2>
            <p>{fetchUser?.email}</p>
        </div>
    </>
  );
}
