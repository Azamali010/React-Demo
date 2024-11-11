import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Card.css"; // Optional, for styling the card

const ApidataCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch user data with axios
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setData(response.data); // Store the response data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data on component mount

    return () => {
      console.log("Cleanup if needed"); // Optional cleanup
    };
  }, []); // Empty dependency array means this effect runs once

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">User Information</h3>
        {data ? (
          <div className="card-details">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Username:</strong> {data.username}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>City:</strong> {data.address.city}</p>
            <p><strong>Company:</strong> {data.company.name}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ApidataCard;
