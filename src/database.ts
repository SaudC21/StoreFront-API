import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
//console.log(process.env)

const {
   POSTGRES_HOST,
   POSTGRES_DB,
   POSTGRES_USER,
   POSTGRES_PASS,
   POSTGRES_TEST_DB,
   ENV,
} = process.env

const client: Pool= new Pool({
   host: POSTGRES_HOST,
   database: ENV == "dev" ? POSTGRES_DB : POSTGRES_TEST_DB,
   user: POSTGRES_USER,
   password: POSTGRES_PASS,
})

export default client