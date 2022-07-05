import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'



export default function CarNew(props) {
  let {cars, readCar, editCar} = props
  let { id } = useParams()
  let car = cars.find( carObj => carObj.id.toString() === id)
  // Submit method will create a newCar object and push into state object array
  const [submit, setSubmit] = useState(false)
  const [carEdit, setCarEdit] = useState(car)

  // Submit method will create a newCar object and push into state object array
  const handleSubmit = (e) => {
    e.preventDefault()
    editCar(carEdit, id)
    readCar()
    setSubmit(true)
  }
    
  return (
    <>
      <div className="form-car">
      <h2>Edit Car!</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" placeholder="Make and Model"
            onChange={(e) => setCarEdit({...carEdit, name: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input type="number" name="year" placeholder="Year (i.e 1997)"
            onChange={(e) => setCarEdit({...carEdit, year: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input type="text" name="enjoys" placeholder="Long walks"
            onChange={(e) => setCarEdit({...carEdit, enjoys: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input type="text" name="image" placeholder="http://yourimageurl.com/image.jpg"
            onChange={(e) => setCarEdit({...carEdit, image: e.target.value})} />
          </FormGroup>
          <Button type="submit" > Car It Up </Button>
        </Form>
      </div>
        {submit && <Navigate replace to={`/carindex/${id}`}/>}
    </>
  )
}
