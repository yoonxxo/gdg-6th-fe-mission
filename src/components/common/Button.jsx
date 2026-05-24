//Button props varients 값이 primary면 흰배경 파란글씨 버튼
//secondary면 파란배경 흰글씨 버튼
import { twMerge } from "tailwind-merge"; //설치도 해야함

const varientsType = {
  primary: "text-blue-500 border-blue-500 hover:bg-blue-50",
  secondary: "text-white border-blue-500 bg-blue-500 ",
  tertiary: "text-white border-red-500 bg-red-500",
};

const Button = ({ children, varients = "primary", className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "border px-2 py-1 rounded-md cursor-pointer",
        varientsType[varients],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
