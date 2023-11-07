import { FC, ReactNode } from "react";

interface CheckBoxFieldProps {
  label: ReactNode;
}
const CheckBoxField: FC<CheckBoxFieldProps> = ({ label }) => {
  return (
    <div className="flex gap-4 text-white">
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  );
};

export default CheckBoxField;
