import { validationResult } from 'express-validator';
import {HttpStatus} from "../../constants/http-status-codes";
import {ErrorResponse} from "../../models/error-response-model";

export const CheckValidations = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(HttpStatus.BadRequest)
            .json({ errors: errors.array() }  as ErrorResponse);
    next();
}