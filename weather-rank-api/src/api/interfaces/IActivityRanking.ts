/**
 * Represents activity ranking scores for different tourism activities
 * @interface IActivityRanking
 */
export interface IActivityRanking {
  /** Score representing suitability for skiing (higher is better) */
  skiing: number;
  /** Score representing suitability for surfing (higher is better) */
  surfing: number;
  /** Score representing suitability for outdoor sightseeing (higher is better) */
  outdoorSightseeing: number;
  /** Score representing suitability for indoor sightseeing (higher is better) */
  indoorSightseeing: number;
}
