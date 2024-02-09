import { fetchProductById } from '@/app/lib/data';
import EditProductComponent from '@/app/ui/profile/EditProductComponent';

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const product = await fetchProductById(id);
  const editProduct = {
    id: product.id as string,
    name: product.name as string,
    description: product.description as string,
    stock: product.stock as number,
    price: product.price as number,
  };

  return (
    <>
      <div>
        <EditProductComponent productData={editProduct} />
      </div>
    </>
  );
}
