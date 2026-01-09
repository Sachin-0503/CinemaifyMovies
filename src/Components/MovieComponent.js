import React from "react";
import styled from "styled-components";
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 260px;
  background: white;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  /* Desktop hover only */
  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
    }
  }
`;

const Coverimage = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  background: #eee;

  @media (max-width: 768px) {
    aspect-ratio: 2 / 2.8;
  }
`;

const MovieName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #111;
  padding: 10px 12px 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 12px 12px;
  font-size: 13px;
  color: #555;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
`;

const MovieInfo = styled.span`
  text-transform: capitalize;
`;
const MovieComponent =(props)=>{
  const { Title, Year, imdbID, Type, Poster } = props.movie;
 return(
   <MovieContainer
    onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      >
    <Coverimage src={Poster} alt={Title}/>
     <MovieName>{Title}</MovieName>
     <InfoColumn>
        <MovieInfo>Year : {Year}</MovieInfo>
        <MovieInfo>Type : {Type}</MovieInfo>
      </InfoColumn>
   </MovieContainer>
 );
};
export default MovieComponent;