import {TransactionMatchRequest} from "../models/transaction-match-models";
import {HttpStatus} from "../constants/http-status-codes";
import {TransactionService} from "../services/transaction-service";
import {ErrorResponse} from "../models/error-response-model";


export class TransactionController {


    transactionService = new TransactionService();
    matchTransaction = async (req, res) => {
        try {
            let TransactionMatchRequest = req.body as TransactionMatchRequest;
            let result = await this.transactionService
                .matchTransaction(TransactionMatchRequest);
            if(result.created) {
                return res.status(HttpStatus.Created).send(result);
            }
            return res.status(HttpStatus.Ok).send(result);
        } catch (e) {
            return res.status(HttpStatus.InternalServerError).send({error: 'Internal Server Error'} as ErrorResponse);
        }
    };


}