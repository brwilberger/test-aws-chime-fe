import { lightTheme } from '../../../theme/light';
import { darkTheme } from '../../../theme/dark';
import { ControlBarProps, ControlBarLayout } from '.';
import { PopOverItemProps } from '../PopOver/PopOverItem';
interface StyledControlBarProps extends ControlBarProps {
    theme: typeof lightTheme | typeof darkTheme;
}
export declare const isVertical: (layout: ControlBarLayout) => boolean;
export declare const isUndocked: (layout: ControlBarLayout) => boolean;
export declare const responsiveStyles: (props: StyledControlBarProps) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const StyledControlBar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledControlBarProps, never>;
interface StyledControlBarItemProps extends StyledControlBarProps {
    popOver: PopOverItemProps[] | null;
    isSelected: boolean;
}
export declare const StyledControlBarItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledControlBarItemProps, never>;
export {};
