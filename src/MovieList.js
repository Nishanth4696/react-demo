import  Movie  from './Movie.js';


export default function MovieList({List_of_Movies}){
    return(
      <section className="movieList">
         {List_of_Movies.map(({name,rating,summary, poster}) => 
          <Movie 
            name={name} 
            rating={rating} 
            summary={summary} 
            poster={poster}
            />)
          }
      </section>
    );
  }
  