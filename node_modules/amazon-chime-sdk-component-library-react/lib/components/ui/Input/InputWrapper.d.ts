import React, { ReactNode } from 'react';
import { Size } from './';
export interface InputWrapperProps {
    leadingIcon?: ReactNode;
    sizing?: Size;
    className?: string;
    children?: ReactNode | ReactNode[];
}
export declare const InputWrapper: React.ForwardRefExoticComponent<InputWrapperProps & React.RefAttributes<HTMLSpanElement>>;
export default InputWrapper;
