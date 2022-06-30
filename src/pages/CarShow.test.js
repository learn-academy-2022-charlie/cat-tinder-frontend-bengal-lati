// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import CarShow from './CarShow.js'
// Import mock cat data
import mockCars from '../mockCars.js'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When CarShow Renders", () => {
    const car = mockCars[0]

    let carShowRender     
    beforeEach(() => {
        carShowRender = shallow(<CarShow car={car}/>)
    })

    it("Displays a single car that was passed into the path", ()=>{
        const carCardRender = carShowRender.find("Card")
        expect(carCardRender.length).toEqual(1)
    })
})