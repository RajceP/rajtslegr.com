import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'input'> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'text', ...props }, ref) => (
    <label className="w-full">
      {label && (
        <div className="mb-1 font-medium dark:text-gray-100">{label}</div>
      )}
      <input
        className="w-full rounded-lg bg-white p-2 text-gray-700 shadow dark:bg-card dark:text-gray-300 sm:text-sm"
        type={type}
        ref={ref}
        {...props}
      />
    </label>
  ),
);

Input.displayName = 'Input';

export default Input;
