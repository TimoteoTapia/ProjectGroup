import { fetchReviewsByUserId } from '@/app/lib/data';

export default async function ReviewsComponent({ id }: { id: string }) {
  const getReviews = await fetchReviewsByUserId(id);

  return (
    <div>
      {getReviews?.map((review) => {
        return (
          <div>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
          </div>
        );
      })}
    </div>
  );
}
