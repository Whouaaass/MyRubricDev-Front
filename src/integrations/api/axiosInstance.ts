import axios from 'axios';
import type { AxiosError, AxiosInstance } from 'axios';
import { AppLocalStorage } from '@/integrations/localStorage/AppLocalStorage';

// Routes that should trigger error handling
const ERROR_CATCHING_ROUTES = [
    '/api/v1/',  // Add your specific routes here
];

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: (import.meta.env.API_URL || 'http://localhost:8082') + '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = AppLocalStorage.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<any>) => {
        // Check if the error occurred in a route we want to handle
        const shouldCatchError = ERROR_CATCHING_ROUTES.some(
            route => error.config?.url?.includes(route)
        );

        if (shouldCatchError) {
            // let errorMessage = 'An unexpected error occurred';

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                errorMessage = error.response.data?.message || `Error ${error.response.status}: ${error.response.statusText}`;
            } else if (error.request) {
                // The request was made but no response was received
                errorMessage = 'No response received from server';
            } else {
                // Something happened in setting up the request
                errorMessage = error.message;
            }

            // Store the error
            // -- setError
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
