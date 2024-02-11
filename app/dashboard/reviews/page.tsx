import { fetchReviewsByProductId } from '@/app/lib/data'; // Import fetchReviewsByProductId function

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch reviews for the given product ID
  const reviews = await fetchReviewsByProductId(params.id);

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 mb-4">
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 mr-2">
                <img
                  className="h-10 w-10 rounded-full"
                  src={review.user.image || '/userdefault.png'}
                  alt={`Avatar de ${review.user.firstName} ${review.user.lastName}`}
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{review.user.firstName} {review.user.lastName}</p>
                <p className="text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="flex items-center mr-4">
                <svg className="h-5 w-5 text-yellow-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v3m0 4v5m-6 2a8.013 8.013 0 0015.458 2.526l3.273 3.273a1 1 0 01-1.414 1.414l-3.273-3.273A8.013 8.013 0 006 14c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8z" />
                </svg>
                <p>{review.rating}/5 stars</p>
              </div>
              <p className="text-gray-500">{review.title}</p>
            </div>
            <p className="text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
