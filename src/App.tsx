import React from 'react';
import { useState } from 'react';
import './App.css';

import Stall from './component/Stall'; // Adjust path if needed

interface StallData {
  type: string;
  unit: string;
  name: string;
  file: string;
}

function App() {
  const [searchStalls, setSearchStalls] = useState('')


 const stallData= [
  { "type": "Chinese", "unit": "01-15", "name": "Indonesian Cuisine", "file": "Chinese_0115_IndonesiaCuisine.JPG" },
  { "type": "Chinese", "unit": "01-16", "name": "Queens Town Dessert", "file": "CHN_0116_queenstown_dessert.JPG" },
  { "type": "Chinese", "unit": "01-19", "name": "Granny Pancakes", "file": "CHN_0119_granny_pancakes.JPG" },
  { "type": "Chinese", "unit": "01-22", "name": "Zhen Ji Mushroom Minced Meat Noodles", "file": "CHN_0122_zhenjimushroommincedmeatnoodles.JPG" },
  { "type": "Chinese", "unit": "01-23", "name": "Ker Ker Kitchen", "file": "CHN_0123_kerkerkitchen.JPG" },
  { "type": "Chinese", "unit": "01-23", "name": "Zhong Kee Wonton Noodle", "file": "CHN_0123_zhongkeewontonnoodle.JPG" },
  { "type": "Chinese", "unit": "01-42", "name": "Bendemeer Prawn Noodle", "file": "CHN_0142_bendemeer_prawnnoodle.JPG" },
  { "type": "Chinese", "unit": "01-43", "name": "29 Porridge and Soup", "file": "CHN_0143_29porridgeandsoup.JPG" },
  { "type": "Chinese", "unit": "01-44", "name": "Tiong Bahru Fried Fish Ball", "file": "CHN_0144_tiongbahrufriedfishball.JPG" }
]

  const filteredStalls = stallData.filter(stall =>
    stall.name.toLowerCase().includes(searchStalls.toLowerCase()) ||
    stall.type.includes(searchStalls) || stall.unit.includes(searchStalls) ||stall.name.includes(searchStalls)
  );


  const handleStallSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchStalls = e.target.value;
    setSearchStalls(searchStalls);
    console.log(`Searching for stalls: ${searchStalls}`);
    // Here you would typically filter the stalls based on the search input
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or unit"
        value={searchStalls}
        onChange={(e) => setSearchStalls(e.target.value)}
      />
      <div>
        {filteredStalls.map((stall, index) => (
          <Stall
            key={index}
            image={`path/to/images/${stall.file}`}  // Adjust the path as needed
            unit={stall.unit}
            name={stall.name}
          />
        ))}
      </div>
    </div>
  );
};
  


export default App;
