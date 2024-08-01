import axiosClient from "../axios-client";

export const fetchAllProperties = async() => {
    try {
        const response = await axiosClient.get('/client-get-all-props');
        return response.data;
    } catch(error) {
        console.error('Error fetching properties', error);
        throw error;
    }
}