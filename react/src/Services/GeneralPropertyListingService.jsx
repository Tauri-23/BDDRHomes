import axiosClient from "../axios-client";

export const fetchAllProperties = async() => {
    try {
        const response = await axiosClient.get('/get-all-property-listed');
        return response.data;
    } catch(error) {
        console.error('Error fetching properties', error);
        throw error;
    }
}

export const fetchPropertyListedFullById = async(propId) => {
    try {
        const response = await axiosClient.get(`/get-full-property-listed-info/${propId}`);
        return response.data;
    } catch(error) {
        console.error('Error fetching property', error);
        throw error;
    }
}