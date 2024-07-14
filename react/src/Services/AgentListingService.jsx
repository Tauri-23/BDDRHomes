import axiosClient from "../axios-client";

export const fetchAgentPublishedProperties = async(id) => {
    try {
        const response = await axiosClient.get(`/get-property-agent/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching property types', error);
        throw error;
    }
}