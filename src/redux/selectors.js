import statusConfig from 'utils/statusConfig';

export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectAvatarURL = state => state.auth.user.avatarURL;
export const selectToken = state => state.auth.token;
export const selectAuthIsError = state => state.auth.isError;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectResults = state => state.search.results;
export const selectStatus = state => statusConfig(state.search.status);
export const selectSearchType = state => state.search.searchType;