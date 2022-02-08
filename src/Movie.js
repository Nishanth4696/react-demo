import { useState } from "react";
import Counter from "./Counter";

export default function Movie({name, rating, summary, poster}){
    const [show, setShow] = useState(false);
const styles = rating > 8 ? {color : 'teal', fontWeight: 'bold'} : {color : 'crimson', fontWeight: 'bold'};

const summarystyles = { display :show ? 'block' : 'none'} 
    return (
      <div className="movie-container">
        <img 
          src={poster} 
          alt={name} 
          className="movie-poster"/>
        <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={styles}>⭐{rating} </p>
        </div>
        <button onClick ={() => setShow(!show)} className="movie-show-button">{show ? "Hide" : "Show" } description</button>
        {/* <p   style={summarystyles} className="movie-summary">{summary}</p>   */}

        {show ? <p   style={summarystyles} className="movie-summary">{summary}</p> : ""}
        <Counter />
        
  
      </div>
    );
  }

 