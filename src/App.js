import styled from 'styled-components';
import MovieComponent from './Components/MovieComponent';
import MovieInfoComponent from './Components/MovieInfoComponent';
import { useState } from 'react';
import axios from 'axios';
export const API_KEY='89a4a352';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f6fa;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px;
  background: linear-gradient(135deg, #141e30, #243b55);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const Appname = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const MOvieIcon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 8px 14px;
  border-radius: 30px;
  width: 420px;
  max-width: 90%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
`;

export const SearchIcon = styled.img`
  width: 22px;
  height: 22px;
  opacity: 0.7;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
  color: #333;

  ::placeholder {
    color: #999;
  }
`;

export const Movielistcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
  gap: 25px;
`;

export const Placeholder = styled.img`
  width: 140px;
  height: 140px;
  opacity: 0.3;
  margin-top: 120px;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (<Container>
    <Header>
      <Appname>
        <MOvieIcon src='movieIcon.svg'/>Cinemaify App</Appname>
        <SearchBox>
          <SearchIcon src='searchicon.svg'/>
          <SearchInput placeholder='Search movies'value={searchQuery}
            onChange={onTextChange}/>
          </SearchBox>
    </Header>
    {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
    <Movielistcontainer>
    {movieList?.length ? (
          movieList.map((movie, index) => (
     <MovieComponent 
     key={index}
     movie={movie}
     onMovieSelect={onMovieSelect}/>
    ))
  ) : (
    <Placeholder src="movieIcon.svg" />
  )}
    </Movielistcontainer>
  </Container>) ;
}

export default App;
