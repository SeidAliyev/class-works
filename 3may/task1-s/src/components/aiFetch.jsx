import React, { useState, useEffect } from 'react';

const AiFetch = () => {
  const [data, setData] = useState(null); // Initialize state for fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData); // Update state with fetched data
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Error occur</p>

      )}
    </div>
  );
};

export default AiFetch;
