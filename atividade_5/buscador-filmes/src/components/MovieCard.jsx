import { Link } from 'react-router-dom'; 

const imageUrl = import.meta.env.VITE_IMG_URL;

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Ano: {new Date(movie.release_date).getFullYear()}</p>
      {}
      <Link to={`/movie/${movie.id}`}>
        Ver Detalhes
      </Link>
    </div>
  );
};

export default MovieCard;