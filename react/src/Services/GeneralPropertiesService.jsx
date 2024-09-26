import axiosClient from "../axios-client"

export const fetchPropertyTypes = async () => {
    try {
        const response = await axiosClient.get('/general-get-property-types');
        return response.data;
    } catch (error) {
        console.error('Error fetching property types', error);
        throw error;
    }
}

export const fetchPropertyAmenities = async () => {
    try {
        const response = await axiosClient.get('/general-get-property-amenities');
        return response.data;
    } catch (error) {
        console.error('Error fetching property amenities', error);
        throw error;
    }
}

export const fetchPropertyFinancing = async () => {
    try {
        const response = await axiosClient.get('/general-get-property-financing');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching property amenities', error);
        throw error;
    }
}

export const fetchPublishedProperties = async() => {
    try {
        const response = await axiosClient.get(`/get-published-property`);
        const propData = response.data;
        propData.map(prop => {
            prop.loan_term_ma = JSON.parse(prop.loan_term_ma);
        });
        return propData;
    } catch (error) {
        console.error('Error fetching properties', error);
        throw error;
    }
}

export const fetchSpecificPublishedPropertyFull = async(propId) => {
    try {
        const response = await axiosClient.get(`/get-published-property-by-id/${propId}`);
        const propData = response.data;
        propData.loan_term_ma = JSON.parse(propData.loan_term_ma);
        return propData;
    } catch(error) {
        console.error('Error fetching property', error);
        throw error;
    }
}