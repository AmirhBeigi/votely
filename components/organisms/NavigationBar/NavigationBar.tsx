import clsx from "clsx";
import { useRouter } from "next/router";
import Box from "../../atom/Box";
import Text from "../../atom/Text";
import { PlusIcon } from "../../icons";

export const NavigationBar: React.FC = () => {
  const router = useRouter();
  const isActiveCheck = ({href,exact}: {href:string,exact?:boolean}): boolean =>exact ? router.pathname === href :  router.pathname.startsWith(href);

  return (
    <Box className="fixed bottom-0 left-0 min-h-[4.3rem] h-[4.3rem] w-full px-7 pr-8 bg-white flex justify-between shadow-[0_-30px_65px_-18px_rgba(0,0,0,0.2)] lg:hidden">
      <Box className="flex space-x-8">
        <Box
          className={clsx("flex items-center space-x-2 opacity-50", {
            "!opacity-100": isActiveCheck({href:"/",exact:true}),
          })}
          onClick={() => router.push("/")}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7878 4.12388L4.12531 11.0614C3.15031 11.8364 2.52531 13.4739 2.73781 14.6989L4.40032 24.6489C4.70032 26.4239 6.40031 27.8614 8.20031 27.8614H22.2003C23.9878 27.8614 25.7003 26.4114 26.0003 24.6489L27.6628 14.6989C27.8628 13.4739 27.2378 11.8364 26.2753 11.0614L17.6128 4.13636C16.2753 3.06136 14.1128 3.06138 12.7878 4.12388Z"
              fill="black"
            />
            <path
              d="M15.2003 19.9739C16.9262 19.9739 18.3253 18.5748 18.3253 16.8489C18.3253 15.123 16.9262 13.7239 15.2003 13.7239C13.4744 13.7239 12.0753 15.123 12.0753 16.8489C12.0753 18.5748 13.4744 19.9739 15.2003 19.9739Z"
              fill="white"
            />
          </svg>
          <Text as="h1" fontWeight="medium">
            Home
          </Text>
        </Box>
        <Box
          className={clsx("flex items-center space-x-2 opacity-50", {
            "!opacity-100": isActiveCheck({href:"/tags"}),
          })}
          onClick={() => router.push("/tags")}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M23.7658 3.09888H21.3908C18.6658 3.09888 17.2283 4.53638 17.2283 7.26138V9.63638C17.2283 12.3614 18.6658 13.7989 21.3908 13.7989H23.7658C26.4908 13.7989 27.9283 12.3614 27.9283 9.63638V7.26138C27.9283 4.53638 26.4908 3.09888 23.7658 3.09888Z"
              fill="black"
            />
            <path
              opacity="0.4"
              d="M9.47834 17.3864H7.10334C4.36584 17.3864 2.92834 18.8239 2.92834 21.5489V23.9239C2.92834 26.6614 4.36584 28.0989 7.09084 28.0989H9.46584C12.1908 28.0989 13.6283 26.6614 13.6283 23.9364V21.5614C13.6408 18.8239 12.2033 17.3864 9.47834 17.3864Z"
              fill="black"
            />
            <path
              d="M8.29084 13.8239C11.2525 13.8239 13.6533 11.423 13.6533 8.46138C13.6533 5.49975 11.2525 3.09888 8.29084 3.09888C5.32922 3.09888 2.92834 5.49975 2.92834 8.46138C2.92834 11.423 5.32922 13.8239 8.29084 13.8239Z"
              fill="black"
            />
            <path
              d="M22.5659 28.0989C25.5275 28.0989 27.9284 25.698 27.9284 22.7364C27.9284 19.7747 25.5275 17.3739 22.5659 17.3739C19.6042 17.3739 17.2034 19.7747 17.2034 22.7364C17.2034 25.698 19.6042 28.0989 22.5659 28.0989Z"
              fill="black"
            />
          </svg>
          <Text as="h1" fontWeight="medium">
            Category
          </Text>
        </Box>
      </Box>
      <Box
        onClick={() => router.push("/new")}
        className="h-16 w-16 -mt-4 flex justify-center items-center bg-black rounded-xl shadow-[0_15px_41px_0_rgba(53,62,69,0.5)]"
      >
        <PlusIcon color="#fff" />
      </Box>
    </Box>
  );
};

export default NavigationBar;
