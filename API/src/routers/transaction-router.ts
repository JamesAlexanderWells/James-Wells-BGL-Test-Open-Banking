import * as express from 'express';
import {TransactionController} from "../controllers/transaction-controller";
import {TransactionValidationProvider} from "../middleware/validators/validation-providers/transaction-validation-provider";


export const transactionRouter = express.Router();

const transactionController : TransactionController = new TransactionController();

transactionRouter.post('/match', TransactionValidationProvider.post(),
    transactionController.matchTransaction);