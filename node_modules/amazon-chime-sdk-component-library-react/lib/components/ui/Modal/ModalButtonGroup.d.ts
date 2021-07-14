import React, { FC, ReactElement } from 'react';
export interface ModalButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Defines the primary button(s) in the modal. */
    primaryButtons: ReactElement | ReactElement[];
    /** Defines the secondary button(s) in the modal. */
    secondaryButtons?: ReactElement | ReactElement[];
}
export declare const ModalButtonGroup: FC<ModalButtonGroupProps>;
export default ModalButtonGroup;
