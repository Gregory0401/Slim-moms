export const selectDailyRate = state => state.dailyRate.dailyRate;
export const selectNotAllowedProducts = state =>
  state.dailyRate.notAllowedProducts;
export const selectSummaries = state => state.dailyRate.summaries;
export const selectId = state => state.dailyRate.id;
export const selectIsLoading = state => state.dailyRate.isLoading;
export const selectError = state => state.dailyRate.error;
