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

export const fetchPropertyAmenities = async () => {
    try {
        const response = await axiosClient.get('/get-property-amenities');
        return response.data;
    } catch (error) {
        console.error('Error fetching property amenities', error);
        throw error;
    }
}

export const fetchPropertyFinancing = async () => {
    try {
        const response = await axiosClient.get('/get-property-financing');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching property amenities', error);
        throw error;
    }
}