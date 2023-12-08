
import { useState } from "react";

import Navigation from "./components/Navigation/Nav";
import Casts from "./components/Casts/Casts";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Card from "./components/Card.js";
import "./index.css";
import TourSite from "./db/data.js"

function App() {

  const [selectedCategory, setSelectedCategory] = useState("");

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = TourSite.filter(
    (tour) => tour.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(TourSite, selected, query) {
    let filteredTourSite = TourSite;

    // Filtering Input Items
    if (query) {
      filteredTourSite = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredTourSite = filteredTourSite.filter(
        ({ category, time, reviews, rating, title }) =>
          category === selected ||
          time === selected ||
          reviews === selected ||
          rating === selected ||
          title === selected
      );
    }

    return filteredTourSite.map(
      ({ _id, img, title,reviews }) => (
        <Card
          key={_id}
          id={_id}
          img={img}
          title={title}
          
          reviews={reviews}
          
          
        />
      )
    );
  }

  const result = filteredData(TourSite, selectedCategory, query);

  return (
    <>
    
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Casts result={result} />
    </>
  );
}

export default App;
