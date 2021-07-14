import React from 'react';
import { SpaceProps, GridProps } from 'styled-system';
export interface CellProps extends SpaceProps, GridProps {
    tag?: string;
    css?: string;
    className?: string;
}
export declare const Cell: React.FC<CellProps>;
export default Cell;
