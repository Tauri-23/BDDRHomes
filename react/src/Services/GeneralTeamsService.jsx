import axiosClient from "../axios-client";

export const fetchAllTeams = async() => {
    try {
        const response = await axiosClient.get('/get-all-teams');
        return response.data;
    } catch(error) {
        console.error('Error fetching teams', error);
        throw error;
    }
}