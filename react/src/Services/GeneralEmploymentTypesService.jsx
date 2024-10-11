import axiosClient from "../axios-client";



// GET
export const fetchAllEmpTypes = async() => {
    try {
        const response = await axiosClient.get('/get-all-emp-types');
        return response.data;
    } catch (error) {
        console.error('Error fetching property types', error);
        throw error;
    }
}