import React, { useState } from 'react';

function TodoUpdate({ todo, onUpdateCancel, handleUpdate }) {
    const [value, setValue] = useState(todo);
    const onChange = e => setValue(e.target.value);

    return (
        <div>
            <input
                type="text"
                data-testid="modify-input"
                value={value}
                onChange={onChange}
            />
            <button
                type="button"
                data-testid="submit-button"
                onClick={() => handleUpdate(value)}
            >
                제출
            </button>
            <button
                type="button"
                data-testid="cancel-button"
                onClick={onUpdateCancel}
            >
                취소
            </button>
        </div>
    );
}

export default TodoUpdate;
