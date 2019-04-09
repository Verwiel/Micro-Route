# Micro Router


## Installing Micro

Create a new project folder:
```
mkdir newProject
```
Add package.json:
```
npm init
```
Install all of your node files:
```
npm install 
```
Install Micro-Dev
```
npm install micro-dev
```
Install Micro Router
```
npm install microrouter
```
## Setting up the Project
Edit your package.json to include the following:
```   
{
"scripts": {
    "start": "micro",
    "dev": "micro-dev"
    }
}
```
Create an index.js file
and add Imports:
```
const { send } = require('micro') //Import Micro
```
```
const { router, get, post, del, put } = require('microrouter') //Import Micro-Router
```
Insert a microservice to index.js:
```
module.exports = () => 'Hello world'
```
Run the project:
```
npm run dev
```

## Adding Routes
blah

## Links
* [Micro Documentation](https://zeit.co/blog/micro-8)
* [Micro-Router Documentation](https://github.com/pedronauck/micro-router)

