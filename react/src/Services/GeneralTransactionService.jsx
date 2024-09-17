import axiosClient from "../axios-client";

export const fetchAllPendingClientTransactions = async(clientId) => {
    try {
        const response = await axiosClient.get(`/get-all-pending-transactions-client/${clientId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching agents', error);
        throw error;
    }
}