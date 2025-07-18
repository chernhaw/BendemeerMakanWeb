import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import Stall from './component/Stall'; // no need to specify .tsx

interface StallData {
  type: string;
  unit: string;
  name: string;
  file: string;
}

function App() {
  const [searchStalls, setSearchStalls] = useState('');

  const stallData: StallData[] = [
    { type: "Chinese", unit: "01-15", name: "Indonesian Cuisine", file: "/images/CHN_0115_IndonesiaCuisine.JPG" },
    { type: "Chinese", unit: "01-16", name: "Queens Town Dessert", file: "/images/CHN_0116_queenstown_dessert.JPG" },
    { type: "Chinese", unit: "01-19", name: "Granny Pancakes", file: "/images/CHN_0119_granny_pancakes.JPG" },
    { type: "Chinese", unit: "01-22", name: "Zhen Ji Mushroom Minced Meat Noodles", file: "/images/CHN_0122_zhenjimushroommincedmeatnoodles.JPG" },
    { type: "Chinese", unit: "01-23", name: "Ker Ker Kitchen", file: "/images/CHN_0123_kerkerkitchen.JPG" },
    { type: "Chinese", unit: "01-23", name: "Zhong Kee Wonton Noodle", file: "/images/CHN_0123_zhongkeewontonnoodle.JPG" },
    { type: "Chinese", unit: "01-42", name: "Bendemeer Prawn Noodle", file: "/images/CHN_0142_bendemeer_prawnnoodle.JPG" },
    { type: "Chinese", unit: "01-43", name: "29 Porridge and Soup", file: "/images/CHN_0143_29porridgeandsoup.JPG" },
    { type: "Chinese", unit: "01-44", name: "Tiong Bahru Fried Fish Ball", file: "/images/CHN_0144_tiongbahrufriedfishball.JPG" }
  ];

  const filteredStalls = stallData.filter(stall =>
    stall.name.toLowerCase().includes(searchStalls.toLowerCase()) ||
    stall.type.toLowerCase().includes(searchStalls.toLowerCase()) ||
    stall.unit.toLowerCase().includes(searchStalls.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <input
        type="text"
        placeholder="Search by name, type, or unit"
        value={searchStalls}
        onChange={(e) => setSearchStalls(e.target.value)}
        style={{ margin: '1rem 0', padding: '0.5rem', width: '100%' }}
      />
      <Row>
  {filteredStalls.map((stall, index) => (
    <div key={index} className="col-12 col-md-6 mb-4">
      <Stall
        image={stall.file}
        unit={stall.unit}
        name={stall.name}
      />
    </div>
  ))}
</Row>

    </div>
  );
}

export default App;

  );
};
  


export default App;
