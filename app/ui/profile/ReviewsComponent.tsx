import { fetchReviewsByUserId } from '@/app/lib/data';

export default async function ReviewsComponent({ id }: { id: string }) {
  const getReviews = await fetchReviewsByUserId(id);

  return (
    <div className="space-y-4">
      {getReviews?.map((review) => {
        return (
          <div
            key={review.id}
            className="rounded-lg bg-green-400 p-4 shadow-md"
          >
            <h3 className="text-xl font-bold">{review.title}</h3>
            <p className="text-gray-700">{review.content}</p>
          </div>
        );
      })}
    </div>
  );
}
