  import React, { useEffect, useState } from "react";
  import Axios from "axios";
  import styled from "styled-components";
  import {API_KEY} from '../App.js';
const Container = styled.div`
  display: flex;
  gap: 30px;
  padding: 40px;
  justify-content: center;
  align-items: flex-start;
  background: white;
  margin: 20px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    margin: 12px;
  }
`;

const CoverImage = styled.img`
  width: 260px;
  height: 390px;
  object-fit: cover;
  border-radius: 14px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 420px;
    margin: 0 auto;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MovieName = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #111;
  margin-bottom: 14px;

  span {
    font-weight: 500;
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MovieInfo = styled.div`
  font-size: 15px;
  color: #333;
  margin: 6px 0;
  line-height: 1.5;

  span {
    opacity: 0.75;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Plot = styled.div`
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.6;
  color: #444;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Close = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  background: #e0e0e0;
  padding: 12px 18px;
  border-radius: 30px;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s ease;

  &:hover {
    background: #d3d3d3;
  }

  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
    text-align: center;
    padding: 14px;
    font-size: 15px;
  }
`;
  const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;

    useEffect(() => {
      Axios.get(
        `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
      ).then((response) => setMovieInfo(response.data));
    }, [selectedMovie]);
    return (
      <Container>
        {movieInfo ? (
          <>
            <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
            <InfoColumn>
              <MovieName>
                {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
              </MovieName>
              <MovieInfo>
                IMDB Rating: <span>{movieInfo?.imdbRating}</span>
              </MovieInfo>
              <MovieInfo>
                Year: <span>{movieInfo?.Year}</span>
              </MovieInfo>
              <MovieInfo>
                Language: <span>{movieInfo?.Language}</span>
              </MovieInfo>
              <MovieInfo>
                Rated: <span>{movieInfo?.Rated}</span>
              </MovieInfo>
              <MovieInfo>
                Released: <span>{movieInfo?.Released}</span>
              </MovieInfo>
              <MovieInfo>
                Runtime: <span>{movieInfo?.Runtime}</span>
              </MovieInfo>
              <MovieInfo>
                Genre: <span>{movieInfo?.Genre}</span>
              </MovieInfo>
              <MovieInfo>
                Director: <span>{movieInfo?.Director}</span>
              </MovieInfo>
              <MovieInfo>
                Actors: <span>{movieInfo?.Actors}</span>
              </MovieInfo>
              <Plot>{movieInfo?.Plot}</Plot>
            </InfoColumn>
            <Close onClick={() => props.onMovieSelect()}>X</Close>
          </>
        ) : (
          "Loading..."
        )}
      </Container>
    );
  };
  export default MovieInfoComponent;
