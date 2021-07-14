import React, { HTMLAttributes, ReactNode } from 'react';
import { ButtonProps } from '../Button';
import { BaseProps } from '../Base';
export declare const DEFAULT_DELAY: number;
declare enum Severity {
    ERROR = "error",
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning"
}
export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** The severity of the notification. */
    severity?: Severity;
    /** The message to display in the notification. */
    message?: string;
    /** The callback fired when a notification is closed. */
    onClose: () => void;
    /** Whether or not the notification should get closed automatically. */
    autoClose?: boolean;
    /** The auto close delay in milliseconds, it defaults to `6000` (6s). */
    autoCloseDelay?: number;
    /** CSS classname to apply custom styles. */
    className?: string;
    /** For rendering a button element adjacent to the message */
    buttonProps?: ButtonProps;
    /** optional icon to override the default */
    icon?: ReactNode;
    /** optional content to render in the body of the notification */
    children?: ReactNode | ReactNode[];
}
export declare const Notification: React.FC<NotificationProps>;
export default Notification;
