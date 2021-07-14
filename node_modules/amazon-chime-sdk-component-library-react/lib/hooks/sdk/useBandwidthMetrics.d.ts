interface BandwidthMetrics {
    availableOutgoingBandwidth: number | null;
    availableIncomingBandwidth: number | null;
}
export declare function useBandwidthMetrics(): BandwidthMetrics;
export default useBandwidthMetrics;
