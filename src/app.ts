import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

class App {
    public express: express.Application

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(logger('dev'));
    }

    private routes() {

    }
}

export default new App().express;
