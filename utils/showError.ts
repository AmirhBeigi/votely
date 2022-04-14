import toast from 'react-hot-toast';

interface Error {
  response: {
    data: any;
  };
}

export const showError = (error: Error) => {
  const message = error.response.data.message;
  if (Array.isArray(message)) return message.forEach((textMessage: string) => toast(textMessage));
  toast(message);
};
