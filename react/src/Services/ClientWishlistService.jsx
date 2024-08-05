import axiosClient from "../axios-client";

export const fetchAllClientWishlists = async(id) => {
    try {
        const response = await axiosClient.get(`/client-get-all-wishlist/${id}`);
        return response.data;
    } catch(error) {
        console.error(`Failed to fetch all wishlist of client ${id} : ${error}`);
        throw error;
    }
}