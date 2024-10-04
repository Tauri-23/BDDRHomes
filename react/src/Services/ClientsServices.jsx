import axiosClient from "../axios-client";

export const fetchAllClients = async() => {
    try {
        const response = await axiosClient.get('/get-all-clients');
        return response.data;
    } catch (error) {
        console.error('Error fetching agents', error);
        throw error;
    }
}

export const fetchAllClientsWithPropViews = async() => {
    try {
        const response = await axiosClient.get('/get-all-clients-with-property-views');
        return response.data;
    } catch (error) {
        console.error('Error fetching agents', error);
        throw error;
    }
}



export const fetchClientInfos = async(clientId) => {
    try {
        const response = await axiosClient.get(`/get-clients-info/${clientId}`)
        return response.data;
    } catch(error) {
        console.error('Error fetching agent information', error);
        throw error;
    }
}