//Esto hace que las variables de entorno se setean en objeto process
import env from 'dotenv'
import envvar from 'env-var'

env.config();

//Configurar las propiedades de las variables, crear objeto
//PORT: consigue el port del .env, pone que es requerido que es que si no esta no va a funcionar y asPortNumber para que si o si sea para eso
//PUBLIC_PATH: lo consigue de .env, default es que si no especifica se pone eso y es un string
export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}