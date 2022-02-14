import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function AddMovie({ List_of_Movies }) {
  const [movies, setMovies] = useState(List_of_Movies);
  
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const addMovie = ()=> {
  
      const newMovie={
        name: name,
        rating: parseInt(rating),
        summary: summary,
        poster: poster,
        
      }
  setMovies([ ...movies, newMovie])
};
  
  return (
    <div className='add-movie'>
        <TextField           
          value={name} 
          onChange={(event) =>setName(event.target.value)} 
          placeholder='Enter the name'
          id="standard-basic"  
          variant="standard" />
     
        <TextField           
          value={rating} 
          onChange={(event) =>setRating(event.target.value)} 
          placeholder='Enter the rating'
          id="standard-basic"  
          variant="standard" />

        <TextField            
          value={summary} 
          onChange={(event) =>setSummary(event.target.value)} 
          placeholder='Enter the summary'
          id="standard-basic"  
          variant="standard" />

        <TextField  
          value={poster} 
          onChange={(event) =>setPoster(event.target.value)} 
          placeholder='Enter the poster'
          id="standard-basic"  
          variant="standard" />

      <Button onClick={addMovie} variant="outlined">AddMovie</Button>

    </div>
  );
}


