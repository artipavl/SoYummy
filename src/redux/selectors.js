export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserPassword = state => state.auth.user.password;
export const selectToken = state => state.auth.token;
export const selectAuthIsError = state => state.auth.isError;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectResults = state => state.search.results;
export const selectSearchIsError = state => state.search.isError;
export const selectSearchIsLoading = state => state.search.isLoading;