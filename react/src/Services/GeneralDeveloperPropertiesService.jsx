import axiosClient from "../axios-client";

/*
|   Developers
*/
// GET
export const fetchAllDevsWithProperties = async() => {
    try {
        const response = await axiosClient.get('/get-all-developers');
        return response.data;
    } catch (error) {
        console.error('Error fetching developers with properties', error);
        throw error;
    }
}


// POST
export const createDeveloper = async() => {
    try {
 
    } catch (error) {
        console.error('Error fetching developers with properties', error);
        throw error;
    }
}