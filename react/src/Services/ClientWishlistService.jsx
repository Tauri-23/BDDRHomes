import axiosClient from "../axios-client";

export const fetchAllClientWishlists = async(id) => {
    try {
        const response = axiosClient.get(`/client-get-all-wishlist/${id}`);
        return (await response).data;
    } catch(error) {
        console.error(`Failed to fetch all wishlist of client ${id} : ${error}`);
        throw error;
    }
}