//COMO ERA ANTES

// const {envs} = require('./config/env') 
// const {startServer} = require('./server/server')

//Moderna ECMAS6

import {envs} from './config/env.js'
import {startServer} from './server/server.js'

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async() => {
    main()
})()