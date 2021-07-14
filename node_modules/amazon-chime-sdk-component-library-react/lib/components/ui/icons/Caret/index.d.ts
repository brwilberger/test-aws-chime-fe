import React from 'react';
import { SvgProps } from '../Svg';
import { Direction } from '../../../../types';
interface CaretProps extends SvgProps {
    /** Defines the direction of the caret. */
    direction?: Direction;
    className?: string;
}
declare const Caret: React.FC<CaretProps>;
export default Caret;
