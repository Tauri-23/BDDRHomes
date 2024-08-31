import axiosClient from "../axios-client";

export const fetchAdminInfo = async(adminId) => {
    try {
        const response = await axiosClient.get(`/get-admin-info/${adminId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching agents', error);
        throw error;
    }
}