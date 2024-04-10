import { createPool } from 'mysql2/promise'
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
} from './config.js'
export  const pool = new createPool({
    host: DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
    
})
    //host: 'localhost',
    //user: 'root',
    //password: 'admin',
    //port: 3306,
    //database: 'formularioDB'
    

