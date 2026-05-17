import { toast } from 'react-toastify';
import styled from 'styled-components';

// Custom Toast Notification Styles
const toastOptionsBase = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
  className: 'custom-toast-container',
  bodyClassName: 'custom-toast-body',
};

const toastSuccessOptions = {
  ...toastOptionsBase,
  style: {
    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    color: '#FFFFFF',
    fontFamily: 'Georgia, serif',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '16px 20px',
    fontSize: '15px',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
  },
};

const toastErrorOptions = {
  ...toastOptionsBase,
  style: {
    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    color: '#FFFFFF',
    fontFamily: 'Georgia, serif',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '16px 20px',
    fontSize: '15px',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
  },
};

const toastWarningOptions = {
  ...toastOptionsBase,
  style: {
    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    color: '#FFFFFF',
    fontFamily: 'Georgia, serif',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '16px 20px',
    fontSize: '15px',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
  },
};

const toastInfoOptions = {
  ...toastOptionsBase,
  style: {
    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
    color: '#FFFFFF',
    fontFamily: 'Georgia, serif',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '16px 20px',
    fontSize: '15px',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
  },
};

/**
 * Show success toast notification
 * @param {string} message - Success message to display
 */
export const toastSuccess = (message) => {
  toast.success(message, toastSuccessOptions);
};

/**
 * Show error toast notification
 * @param {string} message - Error message to display
 */
export const toastError = (message) => {
  toast.error(message, toastErrorOptions);
};

/**
 * Show warning toast notification
 * @param {string} message - Warning message to display
 */
export const toastWarning = (message) => {
  toast.warning(message, toastWarningOptions);
};

/**
 * Show info toast notification
 * @param {string} message - Info message to display
 */
export const toastInfo = (message) => {
  toast.info(message, toastInfoOptions);
};

/**
 * Show generic toast notification
 * @param {string} message - Message to display
 * @param {'success' | 'error' | 'warning' | 'info'} type - Type of notification
 */
export const showToast = (message, type = 'info') => {
  switch (type) {
    case 'success':
      toastSuccess(message);
      break;
    case 'error':
      toastError(message);
      break;
    case 'warning':
      toastWarning(message);
      break;
    case 'info':
      toastInfo(message);
      break;
    default:
      toastInfo(message);
  }
};

// Custom CSS for toast containers
export const toastGlobalStyles = `
  .Toastify__toast-container {
    width: auto;
    max-width: 500px;
    padding: 16px;
    z-index: 9999;
  }

  .Toastify__toast {
    background: transparent;
    box-shadow: none;
    border: none;
    padding: 0;
    margin-bottom: 12px;
  }

  .Toastify__toast--success,
  .Toastify__toast--error,
  .Toastify__toast--warning,
  .Toastify__toast--info {
    background: transparent;
    box-shadow: none;
  }

  .custom-toast-body {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: Georgia, serif;
    line-height: 1.5;
  }

  .Toastify__toast-icon {
    width: 20px;
    min-width: 20px;
    height: 20px;
  }

  .Toastify__progress-bar {
    height: 3px;
    border-radius: 2px;
  }

  .Toastify__progress-bar--success {
    background: rgba(255, 255, 255, 0.6);
  }

  .Toastify__progress-bar--error {
    background: rgba(255, 255, 255, 0.6);
  }

  .Toastify__progress-bar--warning {
    background: rgba(255, 255, 255, 0.6);
  }

  .Toastify__progress-bar--info {
    background: rgba(255, 255, 255, 0.6);
  }

  .Toastify__close-button {
    color: #FFFFFF;
    opacity: 0.8;
    transition: opacity 150ms ease-in-out;
  }

  .Toastify__close-button:hover {
    opacity: 1;
  }

  @media (max-width: 480px) {
    .Toastify__toast-container {
      max-width: calc(100vw - 32px);
      width: 100%;
      left: 16px !important;
      right: 16px !important;
    }
  }
`;
