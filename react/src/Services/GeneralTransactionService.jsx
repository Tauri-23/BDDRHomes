import axiosClient from "../axios-client";

export const fetchTransactionInfoFullById = async(transactionId) => {
    try {
        const response = await axiosClient.get(`/get-full-transaction-info-by-transaction-id/${transactionId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching full information of transaction: ${transactionId}`);
        throw error;
    }
}

export const fetchAllAgentOngoingTransactions = async(agentId) => {
    try {
        const response = await axiosClient.get(`/get-all-ongoing-transactions-agent/${agentId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching pending transactions");
        throw error;
    }
}

export const fetchAllPendingTransactions = async() => {
    try {
        const response = await axiosClient.get('/get-all-pending-transactions');
        return response.data;
    } catch (error) {
        console.error("Error fetching pending transactions");
        throw error;
    }
}

export const fetchAllPendingClientTransactions = async(clientId) => {
    try {
        const response = await axiosClient.get(`/get-all-pending-transactions-client/${clientId}`);
        return response.data;
    } catch (error) {
        console.error('Error client pending transactions', error);
        throw error;
    }
}