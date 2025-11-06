# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
# Adopt_A_Pet

In this project, you will have the opportunity to practice using React Router to add client-side routing to a React Application. Specifically, you will be building a pet adoption website that allows users to view all the animals of a particular species and view the profiles of specific animals.

Currently, the app renders a HomePage component that fetches and displays all adoptable pets (you can view the code for this page in src/pages/home/index.js). We have also built a PetDetailsPage to display the details for a particular pet (src/pages/detail/index.js), but this component will not render until you create a route to display it.

Your objective will be to add client-side routing to the application using React Router so that:

The HomePage component responds to the browser’s current URL by displaying only pets of the species the user wishes to view.
The PetDetailsPage page displays when the browser’s current URL includes a specific pet’s id.
The PetDetailsPage displays data for the correct pet based on the id in the URL parameters’ values.
When the user searches for a pet in the search bar, they are redirected to the SearchPage, which uses the query parameter called name to filter pets by name.
When a user clicks a pet whose details are not available, they are redirected to a PetNotFoundPage.
From the PetNotFound page, users can click “Go Home” button that will take them to the root path page.
Before you get started, spend some time familiarizing yourself with the project’s starting code. In particular, in the src/ folder, take note of the components that you’ll be primarily working with:

src/App.js (App)
src/pages/home/index.js (HomePage)
src/pages/detail/index.js (PetDetailsPage)
src/pages/search/index.js (SearchPage)
src/pages/petNotFound/index.js (PetDetailsNotFound)
This lesson uses Mock Service Worker (MSW) to replicate the functionality of an external API. To use MSW, you’ll want to use Google Chrome and enable third-party cookies.

Setup Instructions
This project should be completed on your own computer instead of on Codecademy. You can download what you’ll need by clicking the “Download” button below. If you need help setting up your computer, read our article about setting up a text editor for HTML/CSS development.

Once you’ve downloaded the project, open up the project folder in your text editor. Then, make sure to install all of the dependencies by running the command below:

npm install

Finally, you can start the application locally by running the command below:

npm start

As you can see, the project is bare-bones right now because you’ll need to create routes and hook up the router by using React Router.

Note: This application was created using Create React App.
