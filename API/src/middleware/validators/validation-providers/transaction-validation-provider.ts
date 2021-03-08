import {CheckValidations} from "../validation-results";
import {body} from "express-validator";

export class TransactionValidationProvider {
    static post = () => {
        return [ body('transactionDescription').notEmpty()
            .withMessage('transactionDescription must be a non-empty string!'),
            CheckValidations ];
    };
}