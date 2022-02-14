import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddMovie({ Movies, setMovies }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");



  const addMovie = () => {

    console.log("adding");
    const newMovie = {
      name,
      rating: parseInt(rating),
      summary,
      poster,
    };
    console.log(newMovie);
    setMovies([...Movies, newMovie]);

  };
  return (

    <div className='add-movie-form'>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Enter the name'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder='Enter the rating'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder='Enter the summary'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder='Enter the poster'
        id="standard-basic"
        variant="standard" />

      <Button onClick={addMovie} variant="outlined">AddMovie</Button>

    </div>

  );
}
