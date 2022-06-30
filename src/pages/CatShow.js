import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

export default function CatShow(props) {
  // let { id } = useParams();
  // let match = useRouteMatch("/catshow/:id")
  // let cat = props.find((catObject)=> catObject.id == id)
  const {name, age,image, enjoys} = props.cat
  return (
    <>
      <Card>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle> {name} </CardTitle>
          <CardSubtitle> {age} </CardSubtitle>
          <CardText> {enjoys} </CardText>
          <Button>Home</Button>
        </CardBody>
      </Card>
    </>
  )
}
