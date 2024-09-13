import axiosClient from "../axios-client";

export const fetchAllProvinces = async() => {
    try {
        const response = await axiosClient.get('/get-all-provinces');
        return response.data;
    } catch(error) {
        console.error('Error fetching provinces', error);
        throw error;
    }
}