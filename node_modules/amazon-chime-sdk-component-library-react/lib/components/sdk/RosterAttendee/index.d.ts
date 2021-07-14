import React from 'react';
import { RosterCellProps } from '../../ui/Roster/RosterCell';
export interface RosterAttendeeProps extends Omit<RosterCellProps, 'name'> {
    /** The ID of a Chime meeting attendee. */
    attendeeId: string;
}
export declare const RosterAttendee: React.FC<RosterAttendeeProps>;
export default RosterAttendee;
