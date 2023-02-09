import { ButtonHTMLAttributes } from 'react';

// Button props
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  options: {
    label: string | JSX.Element;
    value: number;
  }[];
  onChange: (number) => void;
};
