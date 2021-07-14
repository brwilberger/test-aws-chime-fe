import React from 'react';
import { SvgProps } from '../Svg';
import { Direction } from '../../../../types';
interface ArrowProps extends SvgProps {
    /** Defines the direction of the arrow. */
    direction?: Direction;
}
declare const Arrow: React.SFC<ArrowProps>;
export default Arrow;
