import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'



export default function CarNew(props) {
  let {readCar, newCar} = props
  // hook for each input field
  const [name, setName ] = useState("")
  const [year, setYear] = useState("")
  const [enjoys, setEnjoys] = useState("")
  const [image, setImage] = useState("")
  const [submit, setSubmit] = useState(false)

  // Submit method will create a newCar object and push into state object array
  const handleSubmit = (e) => {
    e.preventDefault()
    let newRide = {
      name: name,
      year: Number(year),
      enjoys: enjoys,
      image: image
    } ;
    newCar(newRide)
    readCar()
    setSubmit(true)
    
  }
    
  return (
    <>
      <div>Enter a new Car!</div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" placeholder="Make and Model"
            onChange={(e) => setName(e.target.value)} value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input type="number" name="year" placeholder="Year (i.e 1997)"
            onChange={(e) => setYear(e.target.value)} value={year}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input type="text" name="enjoys" placeholder="Long walks"
            onChange={(e) => setEnjoys(e.target.value)} value={enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input type="text" name="image" placeholder="http://yourimageurl.com/image.jpg"
            onChange={(e) => setImage(e.target.value)} value={image}
            />
          </FormGroup>
          <Button type="submit" > Car It Up </Button>
        </Form>
        {submit && <Navigate replace to="/carindex"/>}
    </>
  )
}
