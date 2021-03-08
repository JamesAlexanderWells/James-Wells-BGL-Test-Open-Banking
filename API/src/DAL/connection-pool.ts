import {promisify} from "util";
import * as mysql from 'mysql';
import config = require('config');

export class ConnectionPool {
    private query;
    private pool : any;
    private getConnection : () => any;

    constructor() {
        this.pool = mysql.createPool(config.get('database'));
        this.query = promisify(this.pool.query).bind(this.pool);
        this.getConnection = promisify(this.pool.getConnection).bind(this.pool);
    }

    executeSingleQuery = async (query: string, parameters?: any[]) => {
        return await this.query(query, parameters ?? []);
    };

}