import axios from "axios";
import { React, useState, useEffect } from "react";
import ResultCard from "./ResultCard";

import "./Add.css";

const Add = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4ecf1ae2`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            {" "}
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {
             movies.length > 0 && (<ul className='results'>
               {movies.map((movie)=>
                <li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>)}
                </ul>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
