import { twMerge } from "tailwind-merge";

const Input = ({ placeholder, className, ...props }) => {
  return (
    <input 
        placeholder={placeholder} 
        className={twMerge("border border-gray-300 text-sm rounded-md px-3 py-2", className)}
        {...props}
    />
    
  )
}

export default Input