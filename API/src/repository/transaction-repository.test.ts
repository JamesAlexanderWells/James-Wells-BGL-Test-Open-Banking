import {TransactionRepository} from "./transaction-repository";


describe("Transaction Repository Tests", ()=> {

    const transactionRepository = new TransactionRepository();

    test('should call getMerchantName with the transactionDescription value', () => {
        const somethingSpy = jest.spyOn(transactionRepository.transactionDataAccess, 'getMerchantName');
        transactionRepository.getMerchantName({transactionDescription: 'test'});
        expect(somethingSpy).toBeCalledWith('test');
    });

    test('should call addUnknownMerchantName with the transactionDescription value', () => {
        const somethingSpy = jest.spyOn(transactionRepository.transactionDataAccess, 'addUnknownMerchantName');
        transactionRepository.createUnknownMerchantName({transactionDescription: 'test'});
        expect(somethingSpy).toBeCalledWith('test');
    });
})
