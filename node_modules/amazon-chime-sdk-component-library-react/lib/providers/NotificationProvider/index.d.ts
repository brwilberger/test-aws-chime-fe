import React from 'react';
import { StateType, Action, Severity, NotificationType, ActionType } from './state';
declare const NotificationProvider: React.FC;
declare const useNotificationState: () => StateType;
declare const useNotificationDispatch: () => React.Dispatch<Action>;
export { NotificationProvider, useNotificationState, useNotificationDispatch, Severity, NotificationType, ActionType, Action, };
