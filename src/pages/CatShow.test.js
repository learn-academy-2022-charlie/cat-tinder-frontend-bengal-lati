// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import CatShow from './CatShow.js'
// Import mock cat data
import mockCats from '../mockCats.js'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When CatShow Renders", () => {
    const cat = mockCats[0]

    let catShowRender     
    beforeEach(() => {
        catShowRender = shallow(<CatShow cat={cat}/>)
    })

    it("Displays a single cat that was passed into the path", ()=>{
        const catCardRender = catShowRender.find("Card")
        expect(catCardRender.length).toEqual(1)
    })
})