import { 
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import { NavLink, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CarShow(props) {
  
    let { id } = useParams()
    let { cars, deleteCar, readCar } = props
    let car = cars.filter(car => car.id.toString() === id)
    let {name, year, enjoys, image} = car.pop()
    let [redirect, setRedirect] = useState(false);

  function clickHandle (id) {
    deleteCar(id);
    readCar();
    setRedirect(true)
  }

  return (
    <>
      <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardTitle> {name} </CardTitle>
          <CardSubtitle> {year} </CardSubtitle>
          <CardText> {enjoys} </CardText>
          <NavLink to="/carindex">
            <Button>Home</Button>
          </NavLink>
          
            <Button onClick={()=>clickHandle(id)}> Delete </Button>
          
        </CardBody>
      </Card>
      {redirect && <Navigate replace to="/carindex"/>}
    </>
  )
}
