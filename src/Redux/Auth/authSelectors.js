export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsername = state => state.auth.user.username;
export const selectUserId = state => state.auth.user.id;
export const selectAccessToken = state => state.auth.accessToken;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectIsRefreshing = state => state.auth.isRefreshing;
