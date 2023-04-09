import React from 'react';

function TodoInput({ todo, onChange, handleSubmit }) {
    return (
        <div>
            <input
                type="text"
                data-testid="new-todo-input"
                value={todo}
                onChange={onChange}
            />
            <button
                type="button"
                data-testid="new-todo-add-button"
                onClick={handleSubmit}
            >
                추가
            </button>
        </div>
    );
}

export default TodoInput;
