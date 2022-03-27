import { useEffect, useState } from "react";
import Box from "../../atom/Box";
import Text from "../../atom/Text";
import { motion } from "framer-motion";

interface OptionProps {
  title: string;
  percentage?: number;
  checked?: boolean;
  submit: () => void;
}

export const Option: React.FC<OptionProps> = (props) => {
  const { title, percentage, checked, submit } = props;
  const [widthBar, setWidthBar] = useState(0);

  useEffect(() => {
    percentage && setTimeout(() => setWidthBar(percentage), 0);
  }, [percentage]);

  return (
    <Box
      className="h-20 bg-[#F0F3F4] flex items-center p-8 px-5 rounded-lg relative overflow-hidden"
      onClick={submit}
    >
      {percentage !== null && (
        <>
          <Box
            dir="auto"
            className="bg-black h-20 absolute left-0 top-0 rounded-lg flex items-center justify-end transition-all w-0 duration-1000"
            style={{ width: `${widthBar}%` }}
          >
            {checked && (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-1 top-0 w-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7417 28.5452C22.8754 28.5452 28.6584 22.7623 28.6584 15.6286C28.6584 8.4949 22.8754 2.71191 15.7417 2.71191C8.60806 2.71191 2.82507 8.4949 2.82507 15.6286C2.82507 22.7623 8.60806 28.5452 15.7417 28.5452ZM20.7929 12.9297C21.0858 12.6368 21.0858 12.162 20.7929 11.8691C20.5 11.5762 20.0251 11.5762 19.7322 11.8691L13.8042 17.7971L11.7512 15.7441C11.4583 15.4512 10.9835 15.4512 10.6906 15.7441C10.3977 16.037 10.3977 16.5119 10.6906 16.8047L13.2739 19.3881C13.4146 19.5287 13.6053 19.6077 13.8042 19.6077C14.0031 19.6077 14.1939 19.5287 14.3346 19.3881L20.7929 12.9297Z"
                  fill="white"
                />
              </svg>
            )}
          </Box>
          <Text
            dir="auto"
            fontSize="xs"
            className="z-10 mr-2 mix-blend-difference text-white text-opacity-60"
          >
            {percentage}%
          </Text>
        </>
      )}
      <Text dir="auto" fontWeight="normal" className="z-10 mix-blend-difference text-white">
        {title}
      </Text>
    </Box>
  );
};

export default Option;
