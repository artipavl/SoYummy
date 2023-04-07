export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectAvatarURL = state => state.auth.user.avatarURL;
export const selectToken = state => state.auth.token;
export const selectIsError = state => state.auth.isError;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;


export const selectorSwicherTheme = state => state.auth.theme;
