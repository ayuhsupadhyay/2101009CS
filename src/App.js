import React from "react";
import review from "./data";
import Testimonial from "./components/Testimonial";



const App = () => {
  return (
    <div>
      <div>
      <h1>Our Testimonial</h1>
      <div></div>
      <Testimonial review={review}/>
    </div>
    </div>

  );
    
};

export default App;
