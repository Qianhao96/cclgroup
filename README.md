## Ultima React with TS

Current Version
React 18.x and PrimeReact 8.x

Getting Started
Ultima is an application template for React, based on the popular create-react-app that allows creating React apps with no configuration. To get started extract the contents of the zip bundle and install the dependencies with npm or yarn.


"npm install" or "yarn"
 
The following command needs to be run to create the css files in the sample project. Note: Users can automatically run scss files without using this command by moving the theme file they want to use in their own projects under the src folder. Details


sass public/assets:public/assets --no-source-map
 
Next step is running the application using the start script and navigate to http://localhost:3000/ to view the application.


"npm start" or "yarn start"
 
That is it, you may now start with the development of your application using the Ultima template.

React Scripts
Following commands are derived from create-app-app.


"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.