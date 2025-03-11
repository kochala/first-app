import axios from 'axios';

async function getSingleProducts(id) {
  try {
    const resp = await axios.get(`https://dummyjson.com/Products/${id}`);
    return resp.data; 
    
    
    
  }
   catch (error) {
    console.error("Failed to fetch product:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
}

export { getSingleProducts }; // Named export
