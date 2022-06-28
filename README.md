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
