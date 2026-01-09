import React from "react";
import styled from "styled-components";
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  background: white;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
  }
`;

const Coverimage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
`;

const MovieName = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: #111;
  padding: 12px 14px 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 14px 14px;
  font-size: 14px;
  color: #555;
`;

const MovieInfo = styled.span`
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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