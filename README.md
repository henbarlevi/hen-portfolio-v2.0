> # Heroku Deployment
* Prerequirement : 1. node 2. git 3. npm
### 1. create Project in the [heroku console](https://dashboard.heroku.com/apps)
### 2. intall the [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
### 3. log in to heroku user with ``` heroku login ``` in the command line
### 4. if repository not exist - ```git init ``` to create one
### 5. set remote 'heroku' to the remote heroku repository.<br> 
a. ```heroku git:remote -a <projectname> ``` with the heroku-cli <b> Or:</b> <br>
b. set a remote named 'heroku' with a regular git command
 ```git remote add heroku <heroku-rep-url> ```. (you can get the <heroku-rep-url> in the <b>heroku console > project > settings</b>)

### 6. create a <b>ProcFile </b> which contain the command to run in order to run the server
```ts
web: <the command>
web: cd server && npm i && node ./app/server.js //enter the server folder, install dependencies (i did it because i assume if its not the root folder - heroku will not install the dependencies automatically) and run the server (app/server.js)
```
### 7. create <b> app.json </b> file that describe the app
```json
{
    "name": " some name",
    "description": "This app does one little thing, and does it well.",
    "keywords": [
      "productivity",
      "HTML5",
      "scalpel"
    ],
    "repository": "https://github.com/jane-doe/small-sharp-tool",
    "logo": "https://small-sharp-tool.com/logo.svg",

    "image": "heroku/ruby",
 
  }
```
more info [here](https://devcenter.heroku.com/articles/app-json-schema)
### 8. push app to the heroku repository : ``` git push heroku master``` 


> # Firebase Deployment
* Prerequirement : 1. node 2. git 3. npm
### 1. install the  firebase-cli if not exist ```npm i -g firebase-tools ```
##