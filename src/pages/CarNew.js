import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'



export default function CarNew(props) {
  let {readCar, newCar} = props
  //Better method would be to have one hook for the new Car
  const [submit, setSubmit] = useState(false)
  const [carNew, setCarNew] = useState({
    name:"",
    year:"",
    enjoys:"",
    image:""
  })

  // Submit method will create a newCar object and push into state object array
  const handleSubmit = (e) => {
    e.preventDefault()
    newCar(carNew)
    readCar()
    setSubmit(true)
  }
    
  return (
    <>
      <div className="form-car">
        <h2>Enter a new car ;)</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" placeholder="Make and Model"
              onChange={(e) => setCarNew({...carNew, name: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label for="year">Year</Label>
              <Input type="number" name="year" placeholder="Year (i.e 1997)"
              onChange={(e) => setCarNew({...carNew, year: e.target.value})} />
              
            </FormGroup>
            <FormGroup>
              <Label for="enjoys">Enjoys</Label>
              <Input type="text" name="enjoys" placeholder="Long walks"
              onChange={(e) => setCarNew({...carNew, enjoys: e.target.value})} />
              
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input type="text" name="image" placeholder="http://yourimageurl.com/image.jpg"
              onChange={(e) => setCarNew({...carNew, image: e.target.value})} />
              
            </FormGroup>
            <Button type="submit" > Car It Up </Button>
          </Form>
      </div>
        {submit && <Navigate replace to="/carindex"/>}
    </>
  )
}
