import React from 'react';
import { Card, Button, CardImg, CardTitle, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default function CatIndex({cars}) {
  return (
    <>
    <CardGroup>
      {cars &&
      cars.map((car, index) => {
      return(
      <Card key={index}>
        <CardImg top width="100%" src={car.image} alt={car.name} />
        <CardBody>
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
    </CardGroup>
    </>
  )
}
