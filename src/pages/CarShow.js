import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function CarShow(props) {
  // let { id } = useParams();
  // let match = useRouteMatch("/catshow/:id")
  // let cat = props.find((catObject)=> catObject.id == id)
  const {name, year, image, enjoys} = props.car
  return (
    <>
      <Card>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle> {name} </CardTitle>
          <CardSubtitle> {year} </CardSubtitle>
          <CardText> {enjoys} </CardText>
          <NavLink to="/carindex">
            <Button>Home</Button>
          </NavLink>
        </CardBody>
      </Card>
    </>
  )
}
