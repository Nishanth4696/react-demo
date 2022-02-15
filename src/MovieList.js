import  Movie  from './Movie.js';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'


export default function MovieList({Movies, setMovies}){
    return(
      <section className="movieList">
         {Movies.map(({name,rating,summary, poster, trailer}, index) => 
          <Movie 
            name={name} 
            rating={rating} 
            summary={summary} 
            poster={poster}
            trailer={trailer}
            id={index}
            deleteButton={
              <IconButton 
                onClick={() =>{
                  const deleteIdx = index;
                  const remainingMovies = Movies.filter((mv, idx) => idx !== deleteIdx) 
                  console.log("remaining", remainingMovies)
                  setMovies(remainingMovies)
                }} 
                  className="movie-show-button"
                  aria-label="delete" 
                  color="error">
                    <DeleteIcon />
                </IconButton>
            }
            editButton={
              <IconButton 
                onClick={() =>{
                 console.log("editing ...",index)
                }} 
                className="movie-show-button"
                  aria-label="delete" 
                  color="error">
                    <EditIcon />
                </IconButton>
            }
            />)
          }
      </section>
    );
  }
  