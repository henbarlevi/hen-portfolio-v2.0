import * as path from 'path';
import * as express from 'express';
//import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
//import * as mongoose from 'mongoose';
//import * as config from 'config';
import * as cors from 'cors';

import appRoutes from './routes/appRoutes';
//===== utils
import { Logger } from './utils/Logger';
const TAG: string = 'App.ts';

// const ENV: string = process.env.NODE_ENV || 'local';
// const envConfig: any = config.get(`${ENV}`);
// const connectionString: string = envConfig.connectionString || 'mongodb://localhost/mydb';
// Logger.d(TAG, `============== ENV Configuration ==============`, 'yellow');
// console.log(envConfig);
// Logger.d(TAG, `============== / ENV Configuration ============`, 'yellow');



// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express(); //THE APP
    this.middleware();
    this.routes();

  }

  // Configure Express middleware.
  private middleware(): void {
    // mongoose.connect(connectionString, {
    //   useMongoClient: true
    // }, (err) => { err ? Logger.d('MongoDB Connection :', `${err}`, 'red') : Logger.d(`MongoDB Connection :`, `SUCCESS`, 'green') })//print mongo connection status

    //this.express.use(logger('dev'));
    this.express.disable('etag'); //in order to prevent 304 when user request the HEN_CV file
    this.express.use(cors());//enable CORS
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(express.static(path.join(__dirname, 'public/dist')));// Point static path to dist

  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    this.express.use('/api', appRoutes);
    // Catch all other routes and return the index file
    this.express.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public/dist/index.html'));
    });

  }



}

export default new App().express; //export instance of new app