import { create } from 'zustand';
import type { AxiosError } from 'axios';

interface AxiosErrorState {
    error: AxiosError | null;
    message: string;
    setError: (error: AxiosError | null) => void;
    clearError: () => void;
}

export const useAxiosErrorStore = create<AxiosErrorState>((set) => ({
    error: null,
    message: '',
    setError: (error) => {
        if (!error) {
            set({ error: null, message: '' });
            return;
        }

        let userMessage = 'An unexpected error occurred';

        if (error.response) {
            switch (error.response.status) {
                case 400:
                    userMessage = 'Invalid request. Please check your data.';
                    break;
                case 401:
                    userMessage = 'You are not authorized. Please log in.';
                    break;
                case 403:
                    userMessage = 'You do not have permission to perform this action.';
                    break;
                case 404:
                    userMessage = 'The requested resource was not found.';
                    break;
                case 500:
                    userMessage = 'Server error. Please try again later.';
                    break;
                default:
                    userMessage = `Error: ${error.response.status}`;
            }
        } else if (error.request) {
            userMessage = 'Network error. Please check your connection.';
        }

        set({ error, message: userMessage });
    },
    clearError: () => set({ error: null, message: '' }),
}));