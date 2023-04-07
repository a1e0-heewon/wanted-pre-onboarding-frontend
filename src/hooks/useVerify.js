import { useState } from 'react';

const useVerify = type => {
    const [verify, setVerify] = useState(false);

    const regVerify = {
        email: {
            reg: /@/,
        },
        password: {
            reg: /(?=.{8,}$)/,
        },
    };

    const onVerify = text => {
        if (regVerify[type].reg.test(text)) {
            setVerify(true);
        } else {
            setVerify(false);
        }
    };

    return [verify, onVerify];
};

export default useVerify;
