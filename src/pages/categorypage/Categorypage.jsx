import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/products") 
      .then((response) => {
        const grouped = response.data.reduce((acc, item) => {
          acc[item.category] = acc[item.category] || [];
          acc[item.category].push(item);
          return acc;
        }, {});
        setCategories(grouped);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {categories[category].map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
