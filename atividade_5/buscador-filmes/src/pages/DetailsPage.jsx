import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;
const imageUrl = import.meta.env.VITE_IMG_URL;

const DetailsPage = ({ favorites, addFavorite, removeFavorite }) => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const isFavorite = favorites.some(fav => fav.id === (movie && movie.id));

  useEffect(() => {
    const getMovieDetails = async () => {
      const detailsUrl = `${apiUrl}/movie/${id}?api_key=${apiKey}&language=pt-BR`;
      
      setLoading(true);
      try {
        const res = await fetch(detailsUrl);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      }
      setLoading(false);
    };

    getMovieDetails();
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  if (loading) {
    return <p className="loading-message">Carregando detalhes...</p>;
  }

  if (!movie || movie.success === false) {
    return (
      <div className="container">
        <p>Filme não encontrado.</p>
        <Link to="/" className="back-link">Voltar para a busca</Link>
      </div>
    );
  }

  return (
    <div className="container details-page">
      {}
      <Link to="/" className="back-link">Voltar para a busca</Link>
      
      <div className="movie-details">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <div className="movie-info">
          <h1>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
          
          {}
          <p className="tagline"><em>{movie.tagline}</em></p>
          <p className="rating">Avaliação: {movie.vote_average.toFixed(1)} / 10</p>
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
          <h3>Gêneros</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>

          <button onClick={handleFavoriteClick} className="favorite-btn">
            {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;