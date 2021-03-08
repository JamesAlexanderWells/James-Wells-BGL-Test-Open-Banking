import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {transactionRouter} from "./routers/transaction-router";

export const indexRouter = express.Router();
indexRouter.use(express());
indexRouter.use(express.urlencoded({ extended: false }));
indexRouter.use(cors());
indexRouter.use(bodyParser.urlencoded({ extended: true }));
indexRouter.use(bodyParser.json());

indexRouter.use('/transaction', transactionRouter);