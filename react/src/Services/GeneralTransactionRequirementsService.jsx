import axiosClient from "../axios-client";

export const fetchTransactionReqirements = async(financingId) => {
    try {
        const response = await axiosClient.get(`/get-transaction-requirements-where/${financingId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching full information of transaction: ${transactionId}`);
        throw error;
    }
}