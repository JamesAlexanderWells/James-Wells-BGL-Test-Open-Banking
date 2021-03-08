import {TransactionDataAccess} from "../DAL/transaction-data-access";
import {TransactionMatchRequest} from "../models/transaction-match-models";

export class TransactionRepository {
    transactionDataAccess: TransactionDataAccess;

    constructor() {
         this.transactionDataAccess = new TransactionDataAccess();
    };

    getMerchantName = async (transactionDescription: TransactionMatchRequest) : Promise<string> => {
        return this.transactionDataAccess.getMerchantName(transactionDescription.transactionDescription);
    }

    createUnknownMerchantName = async (transactionDescription: TransactionMatchRequest) : Promise<string> => {
        return this.transactionDataAccess.addUnknownMerchantName(transactionDescription.transactionDescription);
    }
}