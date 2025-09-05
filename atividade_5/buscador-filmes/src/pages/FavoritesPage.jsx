import MovieCard from '../components/MovieCard';

const FavoritesPage = ({ favorites }) => {
  return (
    <div className="container">
      <h2>Meus Filmes Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você ainda não tem filmes favoritos.</p>
      ) : (
        <div className="movies-container">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;