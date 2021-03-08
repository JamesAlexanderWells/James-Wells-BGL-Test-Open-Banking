import {TransactionController} from "./transaction-controller";
import {TransactionMatchResponse} from "../models/transaction-match-models";
import {HttpStatus} from "../constants/http-status-codes";



const httpMocks = require('node-mocks-http');

describe("Transaction Controller Tests", ()=> {
    test('matchTransaction controller should return correct body and status 200 and call transactionService.matchTransaction', async () => {
        const transactionController = new TransactionController();

        const matchMerchantPromiseMock = new Promise<TransactionMatchResponse>((resolve) => {
                resolve({created: false, merchantName: 'test name', transactionDescription: 'test desc'});
        })
        const response = httpMocks.createResponse();
        const matchTransactionSpy = jest.spyOn(transactionController.transactionService, 'matchTransaction').mockImplementation(async () => await matchMerchantPromiseMock.then(val => {return val}));
        await transactionController.matchTransaction({body: {transactionDescription: 'test desc'}}, response).then(result => {
            expect(matchTransactionSpy).toHaveBeenCalledWith({transactionDescription: 'test desc'});
            expect(response.statusCode).toEqual(200);
        });
    });


    test('matchTransaction controller should return correct body and status 201 and call transactionService.matchTransaction', async () => {
        const transactionController = new TransactionController();
        const matchMerchantPromiseMock = new Promise<TransactionMatchResponse>((resolve) => {
            resolve({created: true, merchantName: 'test name', transactionDescription: 'test desc'});
        })
        const matchTransactionSpy = jest.spyOn(transactionController.transactionService, 'matchTransaction').mockImplementation(async () => await matchMerchantPromiseMock.then(val => {return val}));
        const response = httpMocks.createResponse();
        await transactionController.matchTransaction({body: {transactionDescription: 'test desc'}}, response).then(result => {
            expect(matchTransactionSpy).toHaveBeenCalledWith({transactionDescription: 'test desc'});
            expect(response.statusCode).toEqual(201);
        });
    });
})
