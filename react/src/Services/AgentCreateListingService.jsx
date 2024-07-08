import axiosClient from "../axios-client"

export const fetchPropertyTypes = async () => {
    try {
        const response = await axiosClient.get('/get-property-types');
        return response.data;
    } catch (error) {
        console.error('Error fetching property types', error);
        throw error;
    }
}