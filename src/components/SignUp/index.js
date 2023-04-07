import React from 'react';
import { ToastContainer } from 'react-toastify';
import useSignForm from 'hooks/useSignForm';
import useNotify from 'hooks/useNotify';
import { signUpApi } from 'api/auth';
import { useNavigate } from 'react-router-dom';

const index = () => {
    const [verifyEmail, verifyPassword, { email, password }, onChange] =
        useSignForm();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        signUpApi(email, password)
            .then(() => {
                navigate('/signin');
            })
            .catch(err => {
                useNotify('error', err.response.data.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="이메일"
                data-testid="email-input"
                onChange={onChange('email')}
            />
            <input
                type="password"
                placeholder="비밀번호"
                data-testid="password-input"
                onChange={onChange('password')}
            />
            <button
                type="submit"
                data-testid="signup-button"
                disabled={!(verifyEmail && verifyPassword)}
            >
                회원가입
            </button>
            <ToastContainer />
        </form>
    );
};

export default index;
