# Project Setup

1. Create Base React App
   > $ ```yarn create react-app bengal-lati-frontend```
2. Change Directory to App Location
   > $ ```cd bengal-lati-frontend```

# Frontend Structure
1. Checkout new branch
   > $ ```gco -b frontend-structure```
2. Create folders (components, pages, assets)
3. Create component files
   > Header.js
   > Footer.js
4. Create pages files
   > Home.js
   > CatIndex.js
   > CatShow.js
   > CatNew.js
   > CatEdit.js
   > NotFound.js
5. Install dependencies
   > $ ```yarn add bootstrap reactstrap react-router-dom@5.3.0```

   > In the src/Index.js
   > ```javascript
   >import "bootstrap/dist/css/bootstrap.min.css"
   >```
6. Within App.js, added BrowserRouter as Router, Route, Switch and import all components/pages, import Header and Footer
   
   > ```javascript
   > import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
   > import Header from './components/Header';
   > import Home from './pages/Home';
   > import CatIndex from './pages/CatIndex';
   > import CatShow from './pages/CatShow';
   > import CatNew from './pages/CatNew';
   > import CatEdit from './pages/CatEdit';
   > import NotFound from './pages/NotFound';
   > import Footer from './components/Footer';
   >```

7. Add mockCats.js to src directory then import mock data mockCats.js
   >```javascript
   > import mockCats from './mockCats.js'
   >```
8. Since we opted to use functional components, import useState, useEffect
   >```javascript
   > import React, { useState, useEffect } from 'react';
   >```
9. Added styling to Header, Footer, Home, NotFound pages
   > Added 404 image to assets folder then imported into NotFound.js. Had to name variable to "fail" because 404 is a number and cannot be used as a variable name.
   >```javascript
   > import fail from '../assets/404.jpg'
   >```
10. Add Enzyme and Jest test dependencies and started test runner
    > $ ```yarn add -D enzyme react-test-renderer enzyme-adapter-react-16```
    > $ ```yarn test```
11. Created header, footer, home, and notfound test js files and copied over base imports
    > ```javascript
    > // Imports React into our test file.
    >     import React from 'react'
    >
    >     // Imports Enzyme testing and deconstructs Shallow into our test file.
    >     import Enzyme, { shallow } from 'enzyme'
    >
    >     // Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
    >     import Adapter from 'enzyme-adapter-react-16'
    >
    >     // Imports in the component we are going to be testing.
    >     import Home from './Home'
    >
    >     //Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
    >     Enzyme.configure({adapter: new Adapter()})
    >``` 
12. Added tests for each, example provided below:
    >```javascript
    >describe("When Home Renders", () => {
    >    let homeRender
    >    beforeEach (() => {
    >        homeRender = shallow(<Home />)
    >    })
    >    it("Displays a heading", () => {
    >        const homeHeading = homeRender.find('h1[id="title"]')
    >        expect(homeHeading.length).toEqual(1)
    >    })
    >})
    >```
13. Created and imported image to Home and added relavent tests:
    > ```javascript
    >import banner from '../assets/Cinder.png'
    >```
    Add to JSX in Home render
    > ```html
    > <img src={banner} alt="Cinder Banner"/>
    > ```
14. Added test to Header.test.js to check for text
    > ```javascript
    >  it("Displays Text in Header", () => {
    >        const headerText = headerRender.find('[className="header-title"]')
    >        expect(headerText.text()).toEqual("CINDER")
    >        
    >    })
    >```

15. Create test catIndex.test.js, import mock cat data for testing

   > It is very important to make sure to pass data within the shallow render
   >```javascript
   > describe("When CatIndex renders", () => {
   > let catIndexRender
   > beforeEach(() => {
   >     catIndexRender = shallow(<CatIndex cats = {mockCats}/>)
   > })
   > it("renders all cats", () => {
   >     const catIndexCard = catIndexRender.find('Card')
   >     console.log("what",catIndexCard.length)
   >     expect(catIndexCard.length).toEqual(mockCats.length)
   > })
   >})
   >```
16. Import NavLink to create button functionality in the index CardGroup
   > ```javascript
   > import { NavLink } from 'react-router-dom'
   > ```

   >```jsx
   >  <NavLink to={`/catshow/${cat.id}`}>
   >     <Button> More Info </Button>
   >  </NavLink>  
   >```

17. When creating forms in functional components, each input field will have it's own state and then we used it to create a new object which we then pushed into our handleSubmit method.

```javascript
  // new state object to add in new cars
  const [carsNew, setCarsNew] = useState(cars);  

  // hook for each input field
  const [name, setName ] = useState("")
  const [year, setYear] = useState("")
  const [enjoys, setEnjoys] = useState("")
  const [image, setImage] = useState("")

  // Submit method will create a newCar object and push into state object array
  const handleSubmit = (e) => {
    e.preventDefault()
    let newCar = {
      name: name,
      year: Number(year),
      enjoys: enjoys,
      image: image
    } ;
    setCarsNew(carsNew.push(newCar))  
    console.log(carsNew)
  }
```

18. Creating fetch requests for functional components require that we use the useEffect hook (don't forget to import). Then we create an async function and call it using the hook.


---
<!-- Boilerplate Below This Line -->
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
