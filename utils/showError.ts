import toast from 'react-hot-toast';

interface Error {
  message: string;
  response: {
    data: any;
  };
}

export const showError = (error: Error) => {
  const message = error.response?.data?.message ?? error.message;
  if (Array.isArray(message)) return message.forEach((textMessage: string) => toast(textMessage));
  toast(message);
};
