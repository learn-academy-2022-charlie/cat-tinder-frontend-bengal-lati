import React from 'react';
import { Card, Button, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { Row } from 'react-bootstrap';



export default function CatIndex(props) {
  let {cars} = props
 
  return (
    <>
    <Row xs={1} md={3} >
      {cars &&
      cars.map((car, index) => {
      return(
      <Card key={index} inverse style={{ backgroundColor: '#999', borderColor: '#000' , borderWidth: "5px" }}>
        <CardImg height="200" src={car.image} alt={car.name} />
        <CardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <CardTitle>{car.name}</CardTitle>
          <CardSubtitle>{car.age}</CardSubtitle>
          <NavLink to={`/carshow/${car.id}`}>
            <Button> More Info </Button>
          </NavLink>  
        </CardBody>
      </Card>
      )
      })
      }
    </Row>
      {/* <Carousel variant="dark">
      {cars && cars.map(car => {
          return(
          <Carousel.Item>    
            <img
              className="d-block w-100"
              src= {car.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <NavLink to={`/carshow/${car.id}`}>
                <Button> {car.name} </Button>
              </NavLink> 
            </Carousel.Caption>
            
          </Carousel.Item>
          )
        })
      }
      </Carousel> */}
    </>
  )
}
