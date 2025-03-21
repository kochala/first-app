// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Category.css"

// const Categorypage = () => {
//   const [categories, setCategories] = useState({});

//   useEffect(() => {
//     axios.get("https://dummyjson.com/products") 
//       .then((response) => {
//         const grouped = response.data.reduce((acc, item) => {
//           acc[item.category] = acc[item.category] || [];
//           acc[item.category].push(item);
//           return acc;
//         }, {});
//         setCategories(grouped);
//       })
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <div>
//       {Object.keys(categories).map((category) => (
//         <div key={category}>
//           <h3>{category}</h3>
//           <ul>
//             {categories[category].map((item) => (
//               <li key={item.id}>{item.name}</li>
//             ))}
//           </ul>
//         </div> 
//       ))}
//     </div>
//   );
// };

// export default Categorypage;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Categorypage = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/category/${slug}`);
                setProducts(response.data.products);  
                console.log(response.data);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return <p>იტვირთება...</p>;
    }

    if (error) {
        return <p>შეცდომა: {error}</p>;
    }

    return (
        <div>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                ))
            ) : (
                <p>პროდუქტი არ მოიძებნა</p>
            )}
        </div>
    );
};

export default Categorypage;