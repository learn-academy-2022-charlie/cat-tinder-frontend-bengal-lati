// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import CarNew from './CarNew.js'
// Import mock cat data
import mockCars from '../mockCars.js'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When CarNew Renders", () => {
    let carNewRender
    beforeEach(() => {
        carNewRender = shallow(<CarNew />)
    })
    it("Display a form to be able to create a new car", ()=>{
        const carNewForm = carNewRender.find("Form")
        expect(carNewForm.length).toEqual(1)
    })
    it("Displays an input for Car Name", () =>{
        const carNewNameInput = carNewRender.find('[name="name"]')
        expect(carNewNameInput.length).toEqual(1)
    })
    it("Displays an input for Car Year", () =>{
        const carNewYearInput = carNewRender.find('[name="year"]')
        expect(carNewYearInput.length).toEqual(1)
    })
    it("Displays an input for Car Enjoys", () =>{
        const carNewEnjoysInput = carNewRender.find('[name="enjoys"]')
        expect(carNewEnjoysInput.length).toEqual(1)
    })
    it("Displays an input for Car Image", () =>{
        const carNewImageInput = carNewRender.find('[name="image"]')
        expect(carNewImageInput.length).toEqual(1)
    })
})