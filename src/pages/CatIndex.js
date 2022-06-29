import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default function CatIndex({cats}) {
  return (
    <>
    <CardGroup>
      {cats &&
      cats.map((cat, index) => {
      return(
      <Card key={index}>
        <CardImg top width="100%" src={cat.image} alt={cat.name} />
        <CardBody>
          <CardTitle>{cat.name}</CardTitle>
          <CardSubtitle>{cat.age}</CardSubtitle>
          <NavLink to={`/catshow/${cat.id}`}>
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
