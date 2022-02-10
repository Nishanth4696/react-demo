import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function AddMovie({ movies }) {
  const [movie, setMovie] = useState([movies]);
  console.log(movies);
  return (
    <div className='add-movie'>
      <TextField id="standard-basic" label="Enter the movie name" variant="standard" />
      <TextField id="standard-basic" label="Enter the movie rating" variant="standard" />
      <TextField id="standard-basic" label="Enter the movie summary" variant="standard" />
      <TextField id="standard-basic" label="Enter the movie poster" variant="standard" />
      <Button onClick={() => setMovie([...movies, movie])} variant="outlined">AddMovie</Button>

    </div>
  );
}
