// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home.js'

// Using image imports allows dynamic image testing
import banner from '../assets/Cinder.png'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Home Renders", () => {
    let homeRender
    beforeEach (() => {
        homeRender = shallow(<Home />)
    })
    it("Displays a heading", () => {
        const homeHeading = homeRender.find('h1[id="title"]')
        expect(homeHeading.length).toEqual(1)
    })
    it("Displays banner image", () => {
        const homeImage = homeRender.find('img').prop("src")
       
        expect(homeImage).toEqual(banner)
        
    })
})