import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default function Home(props) {
  let {cars} = props
  return (
    <>
      <Carousel>
      {cars && cars.map(car => {
          return(
          <Carousel.Item>    
            <img
              className="d-block w-100"
              src= {car.image}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
            
          </Carousel.Item>
          )
        })
      }
      </Carousel>
    </>
  )
}
