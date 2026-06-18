import axios from 'axios';
import { useStore } from './store';

export const api = axios.create({
  baseURL: 'https://localhost:5001/api', 
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config) => {
    const rowVersion = (config as any).rowVersion;
    if (rowVersion && ['post', 'put', 'patch'].includes(config.method || '')) {
      config.headers['Idempotency-Key'] = rowVersion;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const setBannerError = useStore.getState().setBannerError;
    
    if (error.response) {
      if (error.response.status === 409) {
        setBannerError('Transaction declined: This request was already processed or contains a stale rowversion key.');
      } else if (error.response.status === 422) {
        setBannerError('Validation conflict: The payload structure or idempotency tracking mismatch.');
      } else {
        setBannerError(`Server error (${error.response.status}): Unable to complete request.`);
      }
    } else {
      setBannerError('Network disconnected. Please check your local connection settings.');
    }
    return Promise.reject(error);
  }
);