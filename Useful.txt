/*
 * Run: npm run start
 *    : npx nodemon ./server.js
 * Hot Reload run: "npx nodemon ./server.js"
 */

 


>> Sever/host: 
	https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing


Google All about react components.
https://medium.com/wesionary-team/types-of-react-components-you-should-know-251cceacd8ac

When uploading to git must ignore node-module folder.
and, after cloning to system first run comand 'npm install' to load all the node-modules



Before starting any app use "npm install"
You are a reputative company working here will help company and me to grow fast utilizing my skills

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Solve:
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

Solution:
	npm install --save-dev @babel/plugin-proposal-private-property-in-object


============== How to change port of react app
This will set the default port to 3006 when starting the dev server.

>> Way 1. In `package.json` file: 
"scripts": {
  from ->	"start": "react-scripts start", // default 3000
  to -> 	"start": "PORT=3006 react-scripts start",
}

>> Way 2. In `src/index.js`:
From -> ReactDOM.render(<App />, document.getElementById('root'));
To -> 	ReactDOM.render(<App />, document.getElementById('root'), 3006); 



>> Way 3. Define `.env` file:  This keeps the port config separate
PORT=3006
And access it via `process.env.PORT` in code, OR

============= How to use .env in React
>> Way 1. install 'npm react-dotenv' and change the package.json "scripts" json to:
"scripts": {
    "start": "react-dotenv && react-scripts start",
    "build": "react-dotenv && react-scripts build",
    "test": "react-dotenv && react-scripts test",
    "serve": "react-dotenv && serve build",
    "eject": "react-scripts eject"
}
add this
"react-dotenv": {
    "whitelist": [
      "KEY_Names1",
      "KEY_Names2",
    ]
}
issue with this approch: it gives all the key to user visible in network tab and in window.

>> Way 2. 
	Create a .env file in the root directory of project
	Add custom variables with the prefix 'REACT_APP_', example: REACT_APP_API_KEY=123456789
	Use 'process.env.REACT_APP_API_KEY' to access, example: const apiKey = process.env.REACT_APP_API_KEY;
Safe, no data leak