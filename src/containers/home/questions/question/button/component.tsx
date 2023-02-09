import { FC, useCallback } from 'react';

import cn from 'lib/classnames';

import type { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ className, options, onChange }: ButtonProps) => {
  const handleClick = useCallback(
    (v) => {
      onChange(v);
    },
    [onChange]
  );

  return (
    <div
      className={cn({
        'flex flex-col aspect-square space-y-5': true,
        [className]: className,
      })}
    >
      {options.map((o) => {
        const { label, value } = o;
        const rounded = value === 0 ? 'rounded-t-full' : 'rounded-b-full';
        return (
          <button
            key={value}
            type="button"
            className={`font-sans text-xl flex justify-center items-center border-2 ${rounded} px-14 h-44 lg:px-28 max-w-[360px] lg:max-w-[520px] uppercase`}
            onClick={() => handleClick(value)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
