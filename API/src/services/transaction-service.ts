import {TransactionMatchRequest, TransactionMatchResponse} from "../models/transaction-match-models";
import {TransactionRepository} from "../repository/transaction-repository";

export class TransactionService {

    transactionRepository: TransactionRepository;
    private unknown = 'Unknown Merchant Name'

    constructor() {
        this.transactionRepository = new TransactionRepository();
    };

    matchTransaction = async (transactionMatchRequest: TransactionMatchRequest): Promise<TransactionMatchResponse> => {
        let merchantName = await this.transactionRepository.getMerchantName(transactionMatchRequest);
        if(!merchantName){
            await this.transactionRepository.createUnknownMerchantName(transactionMatchRequest);
            merchantName = this.unknown;
            return {
                merchantName,
                transactionDescription: transactionMatchRequest.transactionDescription,
                created: true
            } as TransactionMatchResponse;
        }
        return {
            merchantName,
            transactionDescription: transactionMatchRequest.transactionDescription,
            created: false
        } as TransactionMatchResponse;
    }
}