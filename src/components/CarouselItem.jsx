import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.cover = props.cover;
    this.title = props.title;
    this.year = props.year;
    this.contentRating = props.contentRating;
    this.duration = props.duration;
    this.source = props.source;
    this.selectMovie = this.selectMovie.bind(this);
  }

  render() {
    return (
      <div className="carousel-item" onClick={this.selectMovie}>
        <img className="carousel-item__img" src={this.cover} alt={this.title} />
        <div className="carousel-item__details">
          <div>
              <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          </div>
          <p className="carousel-item__details--title">{this.title}</p>
          <p className="carousel-item__details--subtitle">
            {`${this.year} ${this.contentRating} ${this.duration}`}
          </p>
        </div>
      </div>
    )
  }
  selectMovie() {
    //this.props.history.push("/bloc");
    this.props.onCarouselItemTermChange(this.id);
  }
};
/*
CarouselItem.propTypes = {
  this.cover: PropTypes.string,
  this.title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}*/

export default CarouselItem;