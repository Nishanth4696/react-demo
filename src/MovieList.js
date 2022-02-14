import  Movie  from './Movie.js';


export default function MovieList({Movies}){
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
            />)
          }
      </section>
    );
  }
  