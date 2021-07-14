import React from 'react';
interface FeaturedTileState {
    tileId: number | null;
}
declare const FeaturedVideoTileProvider: React.FC;
declare function useFeaturedTileState(): FeaturedTileState;
export { FeaturedVideoTileProvider, useFeaturedTileState };
