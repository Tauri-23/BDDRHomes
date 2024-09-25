import axiosClient from "../axios-client";

export const fetchAllProjectsFull = async() => {
    try {
        const response = await axiosClient.get('/get-all-projects-full');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects: ', error);
        throw error;
    }
}

export const fetchProjectInfoFullById = async(projId) => {
    try {
        const response = await axiosClient.get(`/get-all-projects-info-full-by-id/${projId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects: ', error);
        throw error;
    }
}