import React from 'react'
import { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

export default function CarNew({cars}) {
  const [carsNew, setCarsNew] = useState(cars);  
  const [name, setName ] = useState("")
  const [year, setYear] = useState("")
  const [enjoys, setEnjoys] = useState("")
  const [image, setImage] = useState("")
  // let [values, setValues] = useState({
  //   name: null, 
  //   year: null,
  //   enjoys: null,
  //   image: null
  // })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(typeof year)
    console.log(enjoys)
    console.log(image)
    let newCar = {
      name: name,
      year: Number(year),
      enjoys: enjoys,
      image: image
    } ;
    setCarsNew(carsNew.push(newCar))  
    console.log(carsNew)
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
    </>
  )
}
