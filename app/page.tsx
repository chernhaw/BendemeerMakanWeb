//import Image from "next/image";
import Header from "../app/components/header";
//import Header from '../'
import Stall from "../app/components/stall";
// import hawker list
import hawkersList from "../app/data/hawkersList.json";


export default function Home() {

  const sortedHawkerList = hawkersList.sort((a,b)=>a.unit.localeCompare(b.unit));

  console.log(hawkersList[0])
  console.log(hawkersList[1])
  return (
    <div >
      <Header />
      {sortedHawkerList.map((hawker, index) => (
        <Stall
          key={index}
          image={hawker.url}  // Assuming hawker data has an image field
          unit={hawker.unit}
          name={hawker.name}
        />
      ))}
    </div>
  );
}
