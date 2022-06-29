import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

export default function CatShow({cats}) {
  let { id } = useParams();
  let match = useRouteMatch("/catshow/:id")
  let cat = cats.find((catObject)=> catObject.id == id)
 
  return (
    <>
      <Card>
        <CardImg top width="100%" src={cat.image} alt={cat.name} />
        <CardBody>
          <CardTitle> {cat.name} </CardTitle>
          <CardSubtitle> {cat.age} </CardSubtitle>
          <CardText> {cat.enjoys} </CardText>
          <Button>Home</Button>
        </CardBody>
      </Card>
    </>
  )
}
