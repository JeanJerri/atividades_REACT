# 🎬 Buscador de Filmes

Aplicação desenvolvida em **React** para buscar, visualizar detalhes e gerenciar uma lista de filmes favoritos, consumindo a API do **TMDB** (ou OMDb).  

Este projeto foi construído para cumprir a atividade proposta de criar um buscador de filmes completo com tratamento de erros, loading e persistência de dados no `localStorage`.

---

## 📌 Funcionalidades

✅ **Página de Busca**  
- Campo de texto para o usuário digitar o termo de pesquisa.  
- Exibição da lista de resultados contendo: pôster, título, ano e botão para detalhes.  

✅ **Paginação**  
- Navegação entre páginas de resultados da busca.  

✅ **Página de Detalhes**  
- Informações completas de um filme: diretor, elenco, sinopse e avaliação.  

✅ **Lista de Favoritos**  
- Adicionar e remover filmes da lista de favoritos.  
- Persistência em **localStorage**.  

✅ **Tratamento de Erros & Loading**  
- Indicador de carregamento durante requisições.  
- Mensagens de erro em caso de falhas na API.  

---

## 🛠️ Tecnologias Utilizadas

- **React** (Vite)  
- **React Router DOM** (navegação entre páginas)  
- **Fetch API** (requisições para TMDB/OMDb)  
- **CSS** (estilização simples)  
- **LocalStorage** (persistência dos favoritos)  

---

## 📂 Estrutura de Pastas

```
src/
 ├── components/
 │   ├── Header.jsx        # Cabeçalho com navegação
 │   └── MovieCard.jsx     # Card de exibição dos filmes
 │
 ├── pages/
 │   ├── SearchPage.jsx    # Página de busca
 │   ├── DetailsPage.jsx   # Página de detalhes
 │   └── FavoritesPage.jsx # Página de favoritos
 │
 ├── App.jsx               # Configuração de rotas
 ├── main.jsx              # Ponto de entrada do React
 └── index.css             # Estilos globais
```

---

## 🚀 Como Executar o Projeto

1. **Clonar o repositório**  
```bash
git clone <url-do-repositorio>
cd buscador-filmes
```

2. **Instalar as dependências**  
```bash
npm install
```

3. **Configurar a API Key**  
- Crie uma conta no [TMDB](https://www.themoviedb.org/) e obtenha sua **API Key**.  
- Crie um arquivo `.env` na raiz do projeto:  
```env
VITE_API_KEY=SUA_CHAVE_AQUI
```

4. **Rodar o projeto**  
```bash
npm run dev
```

---

## 📖 Informações do Template React + Vite

Este projeto foi criado com o template oficial do [React + Vite](https://vitejs.dev/).  

O Vite fornece uma configuração mínima para rodar projetos React com **HMR** (Hot Module Replacement) e suporte a ESLint.  
Atualmente, dois plugins oficiais estão disponíveis:  

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (usa Babel para Fast Refresh)  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (usa SWC para Fast Refresh)  

Se desejar expandir a configuração do ESLint ou utilizar **TypeScript**, consulte a documentação oficial do Vite para integrar `typescript-eslint` e boas práticas de produção.  
