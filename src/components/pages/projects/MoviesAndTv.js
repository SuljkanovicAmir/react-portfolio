import React from "react";
import MovieImg from "../../../styles/images/movies-project/movie.png";
import FirstImage from "../../../styles/images/movies-project/movies-first.png";
import SecondImage from "../../../styles/images/movies-project/movies-second.jpg";
import PreviewContact from '../preview/PreviewContact'
import TvImg from "../../../styles/images/tvshow.jpg";
import ExitIcon from  "../../../styles/images/close.svg";
import { Link } from "react-router-dom";


function MoviesAndTv() {
  return (
    <>
    <div className="project-page">
      <div className="project-header-wrapper">
        <div className="project-header-title-div">
          <div className="project-header-title">
            <p>Name</p>
            <p>Project: Movies and TV</p>
          </div>
          <div className="project-header-title">
            <p>Technologies</p>
            <p>Next.js - Firebase</p>
          </div>
          <div className="project-header-title">
            <p>Type</p>
            <p>Website</p>
          </div>
          <div className="project-header-title">
            <p>Year</p>
            <p>2023</p>
          </div>
        </div>
        <div className="project-header-img-div">
          <img className="img-1" src={MovieImg} alt="main" />
          <p>Movies and TV</p>
        </div>
      </div>
      <div className="project-description">
        <p>Description</p>
        <p>
          Using Next.js, TMDB and Firebase, this application allows you to
          search, filter and sort content. Additionally, you can create an
          account to build a watchlist and mark content as watched.
        </p>
      </div>
      <div className="project-images-div-one">
        <div className="project-imgs">
          <img src={FirstImage} alt="main" />
        </div>
      </div>
      <div className="project-div-description">
        <p>Home Page</p>
        <p>
          On the homepage, you'll find a rotating movie carousel showcasing top
          movies, along with popular film and TV show categories for easy
          discovery.
        </p>
      </div>
      <div className="project-images-div-two">
        <div className="project-imgs">
          <img src={SecondImage} alt="main" />
        </div>
      </div>
      <div className="project-div-description">
        <p>Profile Page</p>
        <p>
          The profile page displays your image, bio, an edit profile button,
          watched movies with ratings and reviews, and your watchlist.
        </p>
      </div>
      <div className="project-images-div-three">
        <div className="project-imgs">
          <img src={TvImg} alt="main" />
        </div>
      </div>
      <div className="project-div-description third">
        <p>TV Page</p>
        <p>
          The profile page displays your image, bio, an edit profile button,
          watched movies with ratings and reviews, and your watchlist.
        </p>
      </div>
        <div className="projectLink">
          <div>
            <p>Visit page: </p>
            <a
              href="https://moviesdatabase-nextjs.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span> Movies and Tv</span>
            </a>
          </div>
          <a
            href="https://github.com/SuljkanovicAmir/moviesdatabase-nextjs"
            target="_blank"
            rel="noreferrer"
          >
            <span>Checkout Github</span>
          </a>
        </div>
    </div>
    <div className="exit-project">
      <Link to='/projects'>
        <img src={ExitIcon} alt="exit"/>
      </Link>
    </div>
    <PreviewContact />
    </>
  );
}

export default MoviesAndTv;
