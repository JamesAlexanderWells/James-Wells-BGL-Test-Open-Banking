import {ConnectionPool} from "./connection-pool";
import {addUnknownTransaction, getTransactions} from "../constants/sql";


export class TransactionDataAccess {

    constructor(private connectionPool? : ConnectionPool) {
        if(!connectionPool)
            this.connectionPool = new ConnectionPool();
    }


    getMerchantName = async (transactionDescription: string) : Promise<any> => {
        let merchantNameResult = (await this.connectionPool
            .executeSingleQuery(getTransactions,
                [transactionDescription]));
        if(merchantNameResult[0]){
            return merchantNameResult[0].merchant_name as string;
        }
        return null;
    }

    addUnknownMerchantName = async (transactionDescription: string) : Promise<string> => {
        let merchantNameResult = (await this.connectionPool
            .executeSingleQuery(addUnknownTransaction,
                [transactionDescription]));
        return 'Success';
    }
}