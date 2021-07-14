import React from 'react';
import { RosterType } from '../../types';
interface RosterContextValue {
    roster: RosterType;
}
declare const RosterProvider: React.FC;
declare function useRosterState(): RosterContextValue;
export { RosterProvider, useRosterState };
