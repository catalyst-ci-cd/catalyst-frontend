import { FC, ReactNode } from 'react';

interface CheckBoxFieldProps {
  label: ReactNode;
}
const CheckBoxField: FC<CheckBoxFieldProps> = ({ label }) => {
  return (
    <div className="flex text-white items-center my-4">
      <input
        id="checkbox-input"
        type="checkbox"
        className="appearance-none peer shrink-0 w-4 h-4 border-2 border-accent rounded-sm bg-white 
        checked:bg-accent checked:border-0"
      />
      <label htmlFor="checkbox-input" className="cursor-pointer ml-2 ">
        {label}
      </label>
      <svg
        className="
      absolute 
      w-4 h-4 
      hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CheckBoxField;
