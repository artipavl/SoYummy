import statusConfig from 'utils/statusConfig';

export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserId = state => state.auth.user.id;
export const selectUserShoppingList = state => state.auth.user.shoppingList;
export const selectAvatarURL = state => state.auth.user.avatarURL;
export const selectToken = state => state.auth.token;
export const selectAuthIsError = state => state.auth.isError;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectorSwicherTheme = state => state.auth.theme;
export const selectorIsSubscribe = state => state.auth.isSubscribed;

export const selectResults = state => state.search.results;
export const selectStatus = state => statusConfig(state.search.status);
export const selectSearchType = state => state.search.searchType;
export const selectTotalResults = state => state.search.totalResults;
// export const selectQuery = state => state.search.query;
