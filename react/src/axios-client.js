import axios from "axios";
import Cookies from "js-cookie"

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = Cookies.get('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response && response.status === 401) {
            // Handle 401 Unauthorized: clear token and log user out
            Cookies.remove('ACCESS_TOKEN');
            // Optionally redirect or perform other actions
        }
        return Promise.reject(error);
    }
);

export default axiosClient;