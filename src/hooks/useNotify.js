import { toast } from 'react-toastify';

const useNotify = (type, text) => {
    return type === 'success' ? toast.success(text) : toast.error(text);
};

export default useNotify;
