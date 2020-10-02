import React from "react";
import Rate from "./Rate";

const MovieItem = ({ movie }) => {
  return (
    <div className="col-md-4">
      <div className="movie-item">
        <div className="item-overlay">
          <div className="movie-info">
            <h1 className="movie-title">{movie.name}</h1>
            <div className="movie-rating">
              <Rate rating={movie.rating} />
            </div>
            <p className="movie-date-type">
              {movie.date} - {movie.type}
            </p>
            <p className="movie-description">{movie.description}</p>
            <p className="movie-more">Read More</p>
            <span className="movie-btn">
              <i className="fa fa-play"></i>
              Watch trailer
            </span>
          </div>
        </div>
        <div className="movie-img">
          <img src={movie.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
