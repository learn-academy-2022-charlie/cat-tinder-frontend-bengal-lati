import React from 'react'
import { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

export default function CarNew(props) {
  let {cars} = props.cars
  const [name, setName ] = useState()
  const [year, setYear] = useState()
  const [enjoys, setEnjoys] = useState()
  const [image, setImage] = useState()

  return (
    <>
      <div>Enter a new Car!</div>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" placeholder="Make and Model"
            onChange={(e) => setName(e.target.value)} value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input type="text" name="year" placeholder="Year (i.e 1997)"
            onChange={this.handleChange} value={this.state.newCar.year}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input type="text" name="enjoys" placeholder="Long walks"
            onChange={this.handleChange} value={this.state.newCar.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input type="text" name="image" placeholder="http://yourimageurl.com/image.jpg"
            onChange={this.handleChange} value={this.state.newCar.image}
            />
          </FormGroup>
          <Button>Car It Up</Button>
        </Form>
    </>
  )
}
