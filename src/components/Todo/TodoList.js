import React from 'react';

function TodoList({ TodoList, onUpdate, handleCompleted, handleRemove }) {
    return TodoList.map(todo => {
        return (
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => handleCompleted(todo)}
                    />
                    <span>{todo.todo}</span>
                </label>
                <button
                    type="button"
                    data-testid="modify-button"
                    onClick={() => onUpdate(todo)}
                >
                    수정
                </button>
                <button
                    type="button"
                    data-testid="delete-button"
                    onClick={() => handleRemove(todo.id)}
                >
                    삭제
                </button>
            </li>
        );
    });
}

export default TodoList;
