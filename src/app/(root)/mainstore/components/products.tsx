import React, { useEffect, useState } from "react";
import { fetchProductCategoryData } from "@/actions/productmanage_actions";

interface ProductCategoryData {
  products: any[]; 
  categories: any[]; 
}

const ProductCategoryComponent: React.FC = () => {
  const [data, setData] = useState<ProductCategoryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductCategoryData();
        console.log(data)
        setData(data);
        setLoading(false);
      } catch (err) {
        console.error((err as Error).message); 
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul className="text-black">
        {data?.products?.map((product, index) => (
          <li key={index}>{product.name}</li> 
        ))}
      </ul>
      <h1>Categories</h1>
      <ul className="text-black">
        {data?.categories?.map((category, index) => (
          <li key={index}>{category.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryComponent;
