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

export const fetchSpecificWishlistById = async(id) => {
    try {
        const response = await axiosClient.get(`/client-get-wishlist/${id}`);
        return response.data;
    } catch(error) {
        console.error(`Failed to fetch wishlist data of ${id} : ${error}`);
        throw error;
    }
}