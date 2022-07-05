// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import CarEdit from './Car.js'
// Import mock cat data
import mockCars from '../mockCars.js'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When CarEdit Renders", () => {
    let carEditRender
    beforeEach(() => {
        carEditRender = shallow(<CarEdit />)
    })
    it("Display a form to be able to create a new car", ()=>{
        const carNewForm = carNewRender.find("Form")
        expect(carNewForm.length).toEqual(1)
    })
    it("Displays an input for Car Name", () =>{
        const carEditNameInput = carEditRender.find('[name="name"]')
        expect(carEditNameInput.length).toEqual(1)
    })
    it("Displays an input for Car Year", () =>{
        const carEditYearInput = carEditRender.find('[name="year"]')
        expect(carEditYearInput.length).toEqual(1)
    })
    it("Displays an input for Car Enjoys", () =>{
        const carNewEnjoysInput = carEditRender.find('[name="enjoys"]')
        expect(carNewEnjoysInput.length).toEqual(1)
    })
    it("Displays an input for Car Image", () =>{
        const carEditImageInput = carEditRender.find('[name="image"]')
        expect(carEditImageInput.length).toEqual(1)
    })
})