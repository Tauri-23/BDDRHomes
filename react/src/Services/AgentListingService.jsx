import axiosClient from "../axios-client";

export const fetchAgentPublishedProperties = async(id) => {
    try {
        const response = await axiosClient.get(`/get-property-agent/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching properties', error);
        throw error;
    }
}

export const fetchAgentSpecificPropertyFull = async(propId) => {
    try {
        const response = await axiosClient.get(`/get-full-property/${propId}`);
        return response.data;
    } catch(error) {
        console.error('Error fetching property', error);
        throw error;
    }
}