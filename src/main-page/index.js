// let's import useEffect so that we can be able to use hooks
import { useEffect, useState, useMemo } from "react";
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import './main-page.css';
import Header  from './header';
import FeaturedHouse from "./featured-house";
import React from "react";

// below you can see how we've used the subtitle  and title objects object  we added 
function App() {
  // return an array containing 2 items, note the array starts empty

  const [allHouses, setAllHouses] = useState ([]);
  
  //code that fetches the data file (houses in our case)using hooks

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);


  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex]; 
    }

  }, [allHouses]);




  // setting upa featured house so that the user can see it
  // we begin by setting featuredHouse as an empty object
  return (
    
    // here's our first router that aids in swithching between components while maintainaining user state
    // router aids in the movements back and forth between pages using browser history and deeplinks 
    <Router>
      <div className="container">
        <Header subtitle="Providing  houses all over the world"/>
        <Routes>
            <Route path ="/" >
              <FeaturedHouse house={featuredHouse}/>

            </Route>

        </Routes>
      </div>


    </Router>
    
  );
}

