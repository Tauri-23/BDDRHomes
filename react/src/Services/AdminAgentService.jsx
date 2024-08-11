import axiosClient from "../axios-client";

export const fetchAllAgents = async() => {
    try {
        const response = await axiosClient.get('/get-all-agents');
        return response.data;
    } catch (error) {
        console.error('Error fetching agents', error);
        throw error;
    }
}