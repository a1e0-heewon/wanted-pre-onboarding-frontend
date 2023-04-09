import React, { useEffect, useState } from 'react';
import * as todoapi from 'api/todo';
import { ToastContainer } from 'react-toastify';
import useNotify from 'hooks/useNotify';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoUpdate from './TodoUpdate';

const index = () => {
    const [isUpdate, setIsUpdate] = useState(null);
    const [updateTodo, setUpdateTodo] = useState(null);
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');

    const onChange = e => setTodo(e.target.value);
    const onUpdate = todo => setUpdateTodo(todo);
    const onUpdateCancel = () => setUpdateTodo(null);

    const handleSubmit = e => {
        e.preventDefault();
        todoapi.todosPostApi(todo).then(() => {
            setIsUpdate(true);
        });
    };
    const handleUpdate = todo => {
        todoapi
            .updateTodoApi(updateTodo.id, todo, updateTodo.isCompleted)
            .then(() => {
                setIsUpdate(true);
            });
        setUpdateTodo(null);
    };
    const handleRemove = id => {
        todoapi.deleteTodoApi(id).then(() => {
            setIsUpdate(true);
        });
    };
    const handleCompleted = todo => {
        todoapi
            .updateTodoApi(todo.id, todo.todo, !todo.isCompleted)
            .then(() => {
                if (!todo.isCompleted) {
                    useNotify('success', `${todo.todo} 완료`);
                } else useNotify('error', `${todo.todo} 미완료`);
                setIsUpdate(true);
            });
    };
    useEffect(() => {
        todoapi.todosGetApi().then(data => {
            setTodoList(data.data);
            setIsUpdate(false);
        });
    }, [isUpdate]);

    return (
        <form>
            <TodoInput
                todo={todo}
                onChange={onChange}
                handleSubmit={handleSubmit}
            />
            <TodoList
                TodoList={todoList}
                onUpdate={onUpdate}
                handleCompleted={handleCompleted}
                handleRemove={handleRemove}
            />
            {updateTodo && (
                <TodoUpdate
                    todo={updateTodo.todo}
                    onUpdateCancel={onUpdateCancel}
                    handleUpdate={handleUpdate}
                />
            )}
            <ToastContainer />
        </form>
    );
};

export default index;
