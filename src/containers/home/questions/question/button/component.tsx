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
        'aspect-square': true,
        [className]: className,
      })}
    >
      <div className="h-full space-y-5">
        {options.map((o) => {
          const { label, value } = o;
          const rounded = value === 0 ? 'rounded-t-full' : 'rounded-b-full';
          return (
            <button
              key={value}
              type="button"
              className={`flex h-[48%] w-full items-center justify-center border-2 font-sans text-xl ${rounded} max-w-[360px] px-14 uppercase lg:max-w-[520px] lg:px-28`}
              onClick={() => handleClick(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Button;
