import React from "react";
//import axios from "axios";

export default function Search() {
  
    return (
      <div>
        <div className="form">
          <form>
            <input type="search" placeholder="Enter a city" />
            <input type="submit" value="Search" />
            <input type="submit" value="My Location" />
          </form> 
         </div>
      </div>
    );
}

