import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }
  // end constructor()

  middlewares() {
    this.server.use(express.json());

    // server.use((req, res, next) => {
    //   console.time("Request");
    //   console.log(`Method: ${req.method}; EndPoint: ${req.url}`);

    //   next();

    //   console.timeEnd("Request");
    // });

    // function checkRequiredParamsCreateUser(req, res, next) {
    //   if (!req.body.name) {
    //     return res.status(400).json({ error: "'name' is required" });
    //   }

    //   return next();
    // }

    // function checkExistsUserByIndex(req, res, next) {
    //   const user = users[req.params.index];

    //   if (!user) {
    //     return res.status(400).json({ error: "user does not exists" });
    //   }

    //   req.user = user;

    //   return next();
    // }
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
