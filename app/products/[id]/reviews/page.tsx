import { fetchUserByEmail } from '@/app/lib/data';
import AddReviewComponent from '@/app/ui/products/AddReviewComponent';
import { auth } from '@/auth';

export default async function AddReview({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  console.log(session);
  const userEmail = session?.user?.email as string;
  console.log(userEmail);

  const productId = params.id;
  const userData = await fetchUserByEmail(userEmail);
  const userId = userData?.id as string;
  console.log(userId);
  return (
    <>
      <h1>Add Review</h1>
      <AddReviewComponent userId={userId} productId={productId} />
    </>
  );
}
