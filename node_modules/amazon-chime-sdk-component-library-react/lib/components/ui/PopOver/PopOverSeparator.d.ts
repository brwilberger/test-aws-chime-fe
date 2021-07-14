import { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export interface PopOverSeparatorProps extends Omit<HTMLAttributes<HTMLLIElement>, 'css'>, BaseProps {
}
export declare const PopOverSeparator: FC<PopOverSeparatorProps>;
export default PopOverSeparator;
