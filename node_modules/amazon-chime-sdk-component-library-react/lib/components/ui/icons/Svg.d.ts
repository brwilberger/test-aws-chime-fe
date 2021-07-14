import React from 'react';
export interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {
    /** CSS classname to apply custom styles. */
    className?: string;
    /** Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height. */
    viewBox?: string;
    /** The horizontal length of a SVG component. */
    width?: string;
    /** The vertical length of a SVG component. */
    height?: string;
    /** The title of a SVG component. */
    title?: string;
    /** Optional styling via styled component string. */
    css?: string;
}
declare const Svg: React.FC<SvgProps>;
export default Svg;
