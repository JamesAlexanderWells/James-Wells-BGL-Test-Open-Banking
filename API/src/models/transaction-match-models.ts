export interface TransactionMatchRequest {
    transactionDescription: string,
};

export interface TransactionMatchResponse {
    transactionDescription: string,
    merchantName: string;
    created: boolean;
};
