import axiosClient from "../axios-client";

export const fetchAllClientPreferedLoc = async(clientId) => {
    try {
        const response = await axiosClient.get(`/get-all-client-prefered-location/${clientId}`);
        return response.data;
    } catch(error) {
        console.error('Error fetching provinces', error);
        throw error;
    }
}