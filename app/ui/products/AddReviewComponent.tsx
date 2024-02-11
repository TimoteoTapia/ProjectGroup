'use client';
import { CreateReview } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function AddReviewComponent({
  userId,
  productId,
}: {
  userId: string;
  productId: string;
}) {
  const initialState = { message: '', errors: {} };
  const [reviewState, setReviewState] = useFormState(
    CreateReview,
    initialState,
  );

  return (
    <form action={setReviewState}>
      <div>
        <label htmlFor="title">Review Title</label>
        <div>
          <input name="title" id="title" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="content">Review content</label>
        <div>
          <input name="content" id="content" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="rating">Review rating(1-10)</label>
        <div>
          <input name="rating" id="rating" type="text" />
        </div>
      </div>
      <input name="userId" type="text" value={userId} hidden />
      <input name="productId" type="text" value={productId} hidden />
      <input type="submit" value="Create Review" />
    </form>
  );
}
