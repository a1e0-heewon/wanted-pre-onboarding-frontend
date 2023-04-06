import client from './customAxios';

export const todosGetApi = async () => {
    return client.get('/todos');
};

export const todosPostApi = async () => {
    return client.post('/todos');
};

export const updateTodoApi = async (id, todo, isCompleted) => {
    return client.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async id => {
    return client.delete(`/todos/${id}`);
};
