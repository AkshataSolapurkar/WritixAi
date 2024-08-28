import { useState, useRef, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category?: string;
  stock?: number;
}

const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  price: z.number().min(0.01, 'Price must be greater than zero'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().optional(),
  stock: z.number().optional()
});

type ProductFormData = z.infer<typeof productSchema>;

const initialProducts: Product[] = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1', category: "Electronics", stock: 5 },
  { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2', category: "Electronics", stock: 10 },
  { id: 3, name: 'Product 3', price: 300, description: 'Description for Product 3', category: "Books", stock: 15 },
  { id: 4, name: 'Product 4', price: 400, description: 'Description for Product 4', category: "Toys", stock: 20 },
  { id: 5, name: 'Product 5', price: 500, description: 'Description for Product 5', category: "Furniture", stock: 25 },
];

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onProductClick = (productId: number) => {
    setSelectedProductId((prevId) => (prevId === productId ? null : productId));
    if (selectedProductId !== productId) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        reset({
          name: product.name,
          price: product.price,
          description: product.description,
          category: product.category || '',
          stock: product.stock || 0,
        });
      }
    }
  };

  const onSubmit = (data: ProductFormData) => {
    if (selectedProductId !== null) {
      setProducts(products.map((product) =>
        product.id === selectedProductId ? { ...product, ...data } : product
      ));
      setSelectedProductId(null);
    }
  };

  const selectedProduct = products.find(product => product.id === selectedProductId);

  return (
    <div className="space-y-4 py-4 px-2">
      <h2 className="text-xl font-bold">Product Management</h2>
      
      <ul className="space-y-2 w-full">
        {products.map((product) => (
          <div key={product.id}>
            <li
              className={`p-4 bg-gray-100 rounded w-full cursor-pointer hover:bg-gray-200 ${
                selectedProductId === product.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => onProductClick(product.id)}
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">Description: {product.description}</p>
              <p className="text-gray-700">Price: ${product.price.toFixed(2)}</p>
              <p className="text-gray-700">Category: {product.category || 'N/A'}</p>
              <p className="text-gray-700">Stock: {product.stock || 0}</p>
            </li>

            {selectedProductId === product.id && (
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="mt-2 p-4 bg-white rounded shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Update {product.name}</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    {...register('name')}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    placeholder="Product Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    {...register('price', { valueAsNumber: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    placeholder="Product Price"
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    {...register('description')}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    placeholder="Product Description"
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <input
                    {...register('category')}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    placeholder="Product Category"
                  />
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Stock</label>
                  <input
                    type="number"
                    {...register('stock', { valueAsNumber: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    placeholder="Stock Quantity"
                  />
                  {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-200 text-gray-600 rounded hover:bg-green-500"
                  >
                    Update Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProductId(null)}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
