import axiosClient from "../axios-client";

export const fetchAllAgents = async() => {
    try {
        const response = await axiosClient.get('/get-all-agents');
        return response.data;
    } catch (error) {
        console.error('Error fetching agents', error);
        throw error;
    }
}



/**
 * 
 * @param {String} agentId 
 * @returns {JSON}
 */
export const fetchAgentInfos = async(agentId) => {
    try {
        const response = await axiosClient.get(`/get-agent-info/${agentId}`)
        return response.data;
    } catch(error) {
        console.error('Error fetching agent information', error);
        throw error;
    }
}