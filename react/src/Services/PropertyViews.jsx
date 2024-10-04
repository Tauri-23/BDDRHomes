import axiosClient from "../axios-client";

export const fetchAllPropViews = async() => {
    try {
        const response = await axiosClient.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching property views: ', error);
        throw error;
    }
}
