import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';
import userr from './components/data/userInfo.json';
import Restdata from './components/data/restaurant.json'
import { useState } from 'react';

const filters={
    1 : "Cost High to Lost",
    2 : "Cost Lost to High",
    3 : "Ratings",
    4 : "Delivery Time",
    5 : "Relevance"
}

function App() {
  const [filterBy,setFilerby]= useState("");
  const [data,setData]=useState(Restdata);

  const updateFilter= (newFilter) =>{
      switch(newFilter){
        case "1" :{
          setFilerby(1)
          data.sort((a,b)=>b.price-a.price);
          setData([...data]);
          break;
        }
        case "2" :{
          setFilerby(2)
          data.sort((a,b)=>a.price-b.price);
          setData([...data]);
          break;
        }
        case "3" :{
          setFilerby(3)
          data.sort((a,b)=>b.rating-a.rating);
          setData([...data]);
          break;
        }
        case "4" :{
          setFilerby(4)
          data.sort((a,b)=>a.time-b.time);
          setData([...data]);
          break;
        }
        case "5" :{
          setFilerby(5)
          data.sort((a,b)=>b.offer-a.offer);
          setData([...data]);
          break;
        }
        default : {
          setData(Restdata);
          break;
        }
      }
      
  }
  return (
    <div>
     <Navbar {...userr.Location}/>
     <Offers/>
     <section class="near-you">
       <Filters filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
       <Restaurants Restdata={data}/>
    </section>
    </div>
  );
}

export default App;
