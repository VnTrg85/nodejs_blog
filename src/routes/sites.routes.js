
import express from 'express';
import { sitesController } from '../app/controllers/SitesController.js';


const sitesRouter = express.Router();


sitesRouter.use('/search',sitesController.search)
sitesRouter.use('/',sitesController.home)


export {sitesRouter}
