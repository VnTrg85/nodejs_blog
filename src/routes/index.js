
import {newsRouter} from './news.routes.js'
import {sitesRouter} from './sites.routes.js'


function route(app)
{
    app.use('/news',newsRouter)
    app.use('/',sitesRouter)
}


export {route} 