import { fetchProductById, fetchReviewsByProductId } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, reviews] = await Promise.all([
    fetchProductById(params.id),
    fetchReviewsByProductId(params.id),
  ]);

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold">{product?.name}</h1>
        <h2 className="mb-2 text-xl font-semibold">Product Details</h2>
        <p className="mb-4 text-gray-700">{product?.description}</p>
        <p className="mb-4 text-xl font-semibold">${product?.price}</p>
        <div className="mx-auto h-48 w-48">
          <Image
            src={product?.image || 'https://via.placeholder.com/200'}
            alt={'Imagen del producto ' + product?.name}
            width={200}
            height={200}
          />
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Reviews</h2>
          <Link href={`/products/${product.id}/reviews`}> Add Review </Link>
          {reviews.map((review, index) => (
            <div key={index} className="mb-4 border-b border-gray-200">
              <div className="mb-2 flex items-center">
                <div className="mr-2 flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={review.user.image || '/userdefault.png'}
                    alt={`Avatar de ${review.user.firstName} ${review.user.lastName}`}
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    {review.user.firstName} {review.user.lastName}
                  </p>
                  <p className="text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="mr-4 flex items-center">
                  <svg
                    className="mr-1 h-5 w-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v3m0 4v5m-6 2a8.013 8.013 0 0015.458 2.526l3.273 3.273a1 1 0 01-1.414 1.414l-3.273-3.273A8.013 8.013 0 006 14c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8z"
                    />
                  </svg>
                  <p>{review.rating}/5 stars</p>
                </div>
                <p className="text-gray-500">{review.title}</p>
              </div>
              <p className="text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
