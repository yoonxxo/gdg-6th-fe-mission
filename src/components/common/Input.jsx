import { twMerge } from "tailwind-merge";

const Input = ({ placeholder, className }) => {
  return (
    <input 
        placeholder={placeholder} 
        className={twMerge("border border-gray-300 text-sm rounded-md", className)}
    />
    
  )
}

export default Input