"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
//import * as logger from 'morgan';
const bodyParser = require("body-parser");
//import * as mongoose from 'mongoose';
//import * as config from 'config';
const appRoutes_1 = require("./routes/appRoutes");
const TAG = 'App.ts';
// const ENV: string = process.env.NODE_ENV || 'local';
// const envConfig: any = config.get(`${ENV}`);
// const connectionString: string = envConfig.connectionString || 'mongodb://localhost/mydb';
// Logger.d(TAG, `============== ENV Configuration ==============`, 'yellow');
// console.log(envConfig);
// Logger.d(TAG, `============== / ENV Configuration ============`, 'yellow');
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express(); //THE APP
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        // mongoose.connect(connectionString, {
        //   useMongoClient: true
        // }, (err) => { err ? Logger.d('MongoDB Connection :', `${err}`, 'red') : Logger.d(`MongoDB Connection :`, `SUCCESS`, 'green') })//print mongo connection status
        //this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(path.join(__dirname, 'public/dist'))); // Point static path to dist
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        this.express.use('/api', appRoutes_1.default);
        // Catch all other routes and return the index file
        this.express.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/dist/index.html'));
        });
    }
}
exports.default = new App().express; //export instance of new app
//# sourceMappingURL=App.js.map