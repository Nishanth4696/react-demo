import { useParams } from "react-router-dom";

 export function MovieDetails({ Movies }) {
  const { id  } = useParams();
  const movie = Movies[id];
  const styles = movie.rating > 8 ? {color : 'teal', fontWeight: 'bold'} : {color : 'crimson', fontWeight: 'bold'};
  return (
    <div className="movie-detail-container">
      
      <iframe 
          width="100%" 
          height="480" 
          src={movie.trailer} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
      
        <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>

        <p className="movie-rating" style={styles}>⭐{movie.rating} </p>
        </div>

   <p className="movie-summary">{movie.summary}</p> 
   
    

  </div>
  );
}
