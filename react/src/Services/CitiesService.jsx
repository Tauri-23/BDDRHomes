import axiosClient from "../axios-client";

export const fetchAllCities = async() => {
    try {
        const response = await axiosClient.get('/get-all-cities');
        return response.data;
    } catch(error) {
        console.error('Error fetching cities', error);
        throw error;
    }
}