import axios from 'axios';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
        'Content-Type': 'application/json',
    },
});
