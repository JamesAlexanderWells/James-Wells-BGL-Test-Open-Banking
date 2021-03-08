import {TransactionService} from "./transaction-service";


describe("Transaction Service Tests", ()=> {


    test('should have matchTransaction call createUnknownMerchantName if returned merchant name is null', async () => {
        const transactionService = new TransactionService();
        const getMerchantPromiseMock = new Promise<string>((resolve) => {
                resolve(null);
        })
        jest.spyOn(transactionService.transactionRepository, 'getMerchantName').mockImplementation(async () => await getMerchantPromiseMock.then(val => {return val}));
        const createUnknownMerchantName = jest.spyOn(transactionService.transactionRepository, 'createUnknownMerchantName').mockImplementation(async () => await getMerchantPromiseMock.then(val => {return val}));
        await transactionService.matchTransaction({transactionDescription: 'test merchant name'}).then(result => {
            expect(result).toStrictEqual({transactionDescription: 'test merchant name', merchantName: 'Unknown Merchant Name', created: true});
            expect(createUnknownMerchantName).toBeCalledWith({transactionDescription: 'test merchant name'});
        })

    });

    test('should not have matchTransaction call createUnknownMerchantName if returned merchant name exists', async () => {
        const transactionService = new TransactionService();
        const getMerchantPromiseMock = new Promise<string>((resolve) => {
                resolve('test merchant name');
        });
        jest.spyOn(transactionService.transactionRepository, 'getMerchantName').mockImplementation(async () => await getMerchantPromiseMock.then(val => {return val}));
        const createUnknownMerchantName = jest.spyOn(transactionService.transactionRepository, 'createUnknownMerchantName');
        await transactionService.matchTransaction({transactionDescription: 'test description'}).then(result => {
        expect(result).toStrictEqual({transactionDescription: 'test description', merchantName: 'test merchant name', created: false});
        expect(createUnknownMerchantName).toBeCalledTimes(0);});
    });
})
