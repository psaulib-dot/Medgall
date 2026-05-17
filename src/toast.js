import { toast } from 'react-toastify';

const toastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
  style: {
    borderRadius: '16px',
    background: '#0F1C2E',
    color: '#F7F4EE',
    fontFamily: 'Georgia, serif',
    boxShadow: '0 16px 36px rgba(0, 0, 0, 0.18)',
  },
};

export const toastSuccess = (message) => {
  toast.success(message, toastOptions);
};

export const toastError = (message) => {
  toast.error(message, toastOptions);
};
