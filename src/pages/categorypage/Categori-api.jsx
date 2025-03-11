 import axios from 'axios';

async function getProductCategories(slug) {
  try {
    const resp = await axios.get(`https://dummyjson.com/Products/category/${slug}`);
    return resp.data; 
    
    
  }
   catch (error) {
    console.error("Failed to fetch product:", error);
    throw error; 
  }
}

export { getProductCategories }; 



