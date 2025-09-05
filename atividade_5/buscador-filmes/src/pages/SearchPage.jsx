import { useState } from 'react';
import MovieCard from '../components/MovieCard';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false); // Para saber se uma busca já foi feita

  const fetchMovies = async (searchQuery, page) => {
    if (!searchQuery) return;

    setLoading(true); // Inicia o loading
    setError(null);   // Limpa erros anteriores
    setSearched(true);// Marca que uma busca foi realizada

    const searchUrl = `${apiUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${page}&language=pt-BR`;

    try {
      const res = await fetch(searchUrl);
      if (!res.ok) { 
        throw new Error('Falha na resposta da rede.');
      }
      const data = await res.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      setError("Não foi possível carregar os filmes. Tente novamente mais tarde.");
      setMovies([]); 
      setTotalPages(0);
    } finally {
      setLoading(false); 
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    setCurrentPage(1);
    fetchMovies(query, 1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchMovies(query, newPage);
    }
  };

  return (
    <div className="container">
      <h2>Busca de Filmes</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome do filme"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {}
      {loading && <p className="loading-message">Carregando...</p>}
      
      {error && <p className="error-message">{error}</p>}
      
      {!loading && !error && (
        <>
          {}
          {searched && movies.length === 0 && <p>Nenhum filme encontrado para "{query}".</p>}

          <div className="movies-container">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              <span>Página {currentPage} de {totalPages}</span>
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Próxima
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;