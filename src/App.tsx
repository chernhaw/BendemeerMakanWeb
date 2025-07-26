import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

import Stall from './component/Stall.tsx'; 

interface StallData {
  type: string;
  unit: string;
  name: string;
  file: string;
}

function App() {
  const [searchStalls, setSearchStalls] = useState('');

  const stallData: StallData[] = [

     { type: "Chinese", unit: "01-01", name: "Wang Wang Crispy Curry Puff", file: "/images/CHN_0101_WangWangCrispyCurryPuff.JPG",remarks: "snacks" },
    { type: "Chinese", unit: "01-02", name: "Fuxing Fresh Fruit Juice", file: "/images/CHN_0102_fuxingfreshfruitjiuce.jpg", remarks: "fruit juice, drinks" },
     { type: "Chinese", unit: "01-04", name: "Hao Ge Chicken Rice", file: "/images/CHN_0104_haogechickenrice.JPG", remarks:"chicken rice, chickenrice" },
      { type: "Chinese", unit: "01-06", name: "Economic Bee Hoon Nasi Lemak", file: "/images/CHN_0106_economicbeehoon_nasilemak.JPG", remarks:"bee hoon , nasi lemak" },
     { type: "Chinese", unit: "01-07", name: "Wan Gui Beverages", file: "/images/CHN_0107_Wan_Gui_Beverages.JPG", remarks: "drinks, kopi, teh, coffee" },
    { type: "Chinese", unit: "01-08", name: "AA Pancake", file: "/images/CHN_0108_AAPancake.JPG", remarks: "desserts, cakes" },
     { type: "Chinese", unit: "01-09", name: "One Ton Mee", file: "/images/CHN_0109_onetonmee.JPG", remarks: "noodles, wonton mee" },
    { type: "Chinese", unit: "01-10", name: "Big Timer", file: "/images/CHN_0110_BigTimer.JPG", remarks: "drinks, kopi, teh, coffee" },
     { type: "Chinese", unit: "01-15", name: "Indonesian Cuisine", file: "/images/CHN_0115_IndonesiaCuisine.JPG",remarks: "porridge" },
    { type: "Chinese", unit: "01-16", name: "Queens Town Dessert", file: "/images/CHN_0116_queenstown_dessert.JPG",remarks: "ice kachang, chng tng desserts"  },
    { type: "Chinese", unit: "01-19", name: "Granny Pancakes", file: "/images/CHN_0119_granny_pancakes.JPG", remarks: "dessert"},
    { type: "Chinese", unit: "01-22", name: "Zhen Ji Mushroom Minced Meat Noodles", file: "/images/CHN_0122_zhenjimushroommincedmeatnoodles.JPG", remarks: "noodles" },
    { type: "Chinese", unit: "01-23", name: "Ker Ker Kitchen", file: "/images/CHN_0123_kerkerkitchen.JPG", remarks: "noodles" },

   { type: "Chinese", unit: "01-34", name: "Healthy Yong Tau Fu", file: "/images/CHN_0134_HealthyYongTauFu.JPG",remarks: "yong tau foo" },
   { type: "Chinese", unit: "01-35", name: "Yong Xiang Carrot Cakes", file: "/images/CHN_0135_yongxiangcarrotcakes.JPG",remarks: "carrot cakes caitaukuay" },
   { type: "Chinese", unit: "01-36", name: "36 Curry Rice", file: "/images/CHN_0136_36curryrice.JPG",remarks: "curry rice" },
    { type: "Chinese", unit: "01-37", name: "Lan Kee Coffee Stall", file: "/images/CHN_0137_lankeecoffeestall.JPG",remarks: "drinks, kopi, teh, coffee" },
   { type: "Chinese", unit: "01-38", name: "Afifa Indian Muslim Food", file: "/images/IND_0138_afifaindianmuslimfood.JPG",remarks: "muslim indian curry" },
   { type: "Chinese", unit: "01-40", name: "Mixed Rice and Economic Bee Hoon", file: "images/CHN_0140_mixedriceandeconomicbeehoon.JPG",remarks: "mixed rice" },
    { type: "Chinese", unit: "01-42", name: "Bendemeer Prawn Noodle", file: "/images/CHN_0142_bendemeer_prawnnoodle.JPG",remarks: "noodles" },
    { type: "Chinese", unit: "01-43", name: "29 Porridge and Soup", file: "/images/CHN_0143_29porridgeandsoup.JPG", remarks: "porridge, soup" },
    { type: "Chinese", unit: "01-44", name: "Tiong Bahru Fried Fish Ball", file: "/images/CHN_0144_tiongbahrufriedfishball.JPG", remarks: "fishball" },
    
     { type: "Chinese", unit: "01-46", name: "Bendemeer Cold and Hot Soya Bean", file: "/images/CHN_0146_bendemeercoldnhotsoyabean.JPG", remarks: "soya bean desserts" },
     { type: "Chinese", unit: "01-55", name: "Zhen Zhou Dao", file: "/images/CHN_0155_ZhenZhouDao.JPG",remarks: "porridge" },
   
    { type: "Chinese", unit: "01-58", name: "Chung Ping Chicken Rice", file: "/images/CHN_0158_ChungPingChickenRice.JPG", remarks: "chicken rice, chickenrice" },
    { type: "Chinese", unit: "01-80", name: "Cheng Liang Cold and Hot Desserts", file: "/images/CHN_0180_chengliangcoldnhotdessert.JPG", remarks: "ice kachang, chng tng desserts" },
   
   
  ];

  const filteredStalls = stallData.filter(stall =>
    stall.name.toLowerCase().includes(searchStalls.toLowerCase()) ||
    stall.type.toLowerCase().includes(searchStalls.toLowerCase()) ||
    stall.unit.toLowerCase().includes(searchStalls.toLowerCase()) ||
    stall.remarks.toLowerCase().includes(searchStalls.toLowerCase())
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
