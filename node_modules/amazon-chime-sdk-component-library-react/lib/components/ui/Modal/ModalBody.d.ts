import { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
interface ModalBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
}
export declare const ModalBody: FC<ModalBodyProps>;
export default ModalBody;
