interface ProductCategoryData {
  products: any[]; 
  categories: any[];
}

export const fetchProductCategoryData = async (): Promise<ProductCategoryData> => {

  try {
    const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/dashboard/getallproductcategorydata`;
    console.log("Fetching data from:", endpoint); 

    const res = await fetch(endpoint, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`HTTP error! status: ${res.status}, response: ${errorText}`); 
      throw new Error(`HTTP error! status: ${res.status}, response: ${errorText}`);
    }

    const responseData: ProductCategoryData = await res.json();
    console.log("Fetched data:", responseData); 

    return responseData;
  } catch (error) {
    console.error("Error in fetching product and category data:", (error as Error).message); 
    throw new Error(`Error in fetching product and category data: ${(error as Error).message}`);
  }
};
