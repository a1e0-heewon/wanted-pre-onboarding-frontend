import { client } from './customAxios';

export const signInApi = async (email, password) => {
    return client.post('/auth/signin', { email, password });
};

export const signUpApi = async (email, password) => {
    return client.post('/auth/signup', { email, password });
};
