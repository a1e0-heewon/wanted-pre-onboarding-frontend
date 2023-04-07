import { useState, useCallback } from 'react';
import useVerify from 'hooks/useVerify';

const useSignForm = () => {
    const [verifyEmail, onVerifyEmail] = useVerify('email');
    const [verifyPassword, onVerifyPassword] = useVerify('password');

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const onChange = useCallback(
        name => e => {
            switch (name) {
                case 'email':
                    onVerifyEmail(e.target.value);
                    break;
                case 'password':
                    onVerifyPassword(e.target.value);
                    break;
                default:
                    break;
            }
            setForm(form => ({ ...form, [name]: e.target.value }));
        },
        [],
    );

    return [verifyEmail, verifyPassword, form, onChange];
};

export default useSignForm;
