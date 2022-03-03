import  Movie  from './Movie.js';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';


const API_URL = "https://b28wd-movie.herokuapp.com"
// const API_URL = "https://620f1911ec8b2ee283336fc9.mockapi.io"

export default function MovieList(){
  const [Movies, setMovies] = useState([]);

  const getMovies = () =>{
    fetch(`${API_URL}/movies`,{method:"GET"})
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs))
  }
  useEffect(getMovies,[])

  const history = useHistory();

  const deleteMovie = (id) =>{
    fetch(`${API_URL}/movies/${id}`,{ method:"DELETE" })
    .then(() => getMovies());
    
  }
 
    return(
      <section className="movieList">
         {Movies.map(({name,rating,summary, poster, trailer, id, _id}) => 
          <Movie 
            name={name} 
            rating={rating} 
            summary={summary} 
            poster={poster}
            trailer={trailer}
            id={_id}
            deleteButton={
              <IconButton 
                onClick={() =>{deleteMovie(_id)}}
                  className="movie-show-button"
                  aria-label="delete" 
                  color="error">
                    <DeleteIcon />
                </IconButton>
            }
            editButton={
              <IconButton 
                onClick={() =>{ history.push("/movies/edit/" + _id)
                 
                }} 
                style={{ marginLeft:"auto" }}
                className="movie-show-button"
                  aria-label="delete" 
                  color="primary">
                    <EditIcon />
                </IconButton>
            }
            />)
          }
      </section>
    );
  }
  
