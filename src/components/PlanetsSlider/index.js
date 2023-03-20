// Write your code here
import Slider from 'react-slick'

import {Component} from 'react'

import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container" data-testid="planets">
        <h1>PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem itemDetails={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
