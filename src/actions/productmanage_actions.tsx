import axios from 'axios';

interface ProductCategoryData {
  products: any[]; 
  categories: any[]; 
}

export const fetchProductCategoryData = async (): Promise<ProductCategoryData> => {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/dashboard/getallproductcategorydata`;

    const res = await axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData: ProductCategoryData = res.data; 

    return responseData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error in fetching product and category data: ${error.message}`); 
      throw new Error(`Error in fetching product and category data: ${error.message}`);
    } else {
      console.error("An unknown error occurred while fetching product and category data");
      throw new Error("An unknown error occurred while fetching product and category data");
    }
  }
};

