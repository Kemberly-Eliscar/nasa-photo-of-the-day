import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from './components/PhotoCard.js';

function App() {
  const [data, setData] = useState({});
  
  axios.get("view-source:https://api.nasa.gov/planetary/apod?api_key=RlVu0xWKQ2LGh5zKsgeSnpciQJvSxmA4e0OxOBqc")
  .then(res => {
    console.log(res.data);
    setData(res.data);
  });
  return (
    <div className="App">
     <p>
       Read through the instructions.
     </p>
     <PhotoCard title={data.title} 
                url= {data.url}
                explanation={data.explanation} />
     </div>
  
  );
}

export default App;
