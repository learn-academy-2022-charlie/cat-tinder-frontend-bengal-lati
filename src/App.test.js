// Imports React into our test file.
import React from 'react'
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
// Imports in the component we are going to be testing.
import App from './App.js'
import Home from './pages/Home.js'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When App Renders", () => {
  let appRender
  beforeEach (() => {
      appRender = shallow(<App />)
  })
  it("Displays a heading", () => {
      const appHeading = appRender.find('h1')
      expect(appHeading.length).toEqual(1)
  })
  it("Routes to Home", () => {
    const renderedHomePath = appRender.find('[path="/"]')
    expect(renderedHomePath.length).toEqual(1)
    expect(renderedHomePath.props().component).toEqual(Home)
  })
})