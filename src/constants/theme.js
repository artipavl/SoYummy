export const theme = {
  colors: {
    white: '#FFFFFF', //білий
    dark: '#000000', //чорний

    whiteMutedArea: '#D9D9D9', //білий пригнічений деякі кнопки та інпути
    whiteMutedBorder: '#D9D9D9',
    bgWhite: '#ECECEC', //білий з bg

    bgDark: '#1E1F28', //чорний з bg
    accent: '#8BAA36', //зелений акцен
    accentCurrent: '#8BAA36', //!зелений акцен без змін
    buttonDelAccent: '#22252A',
    accentMuted: '#EBF3D4', //зелений акцен пригнічений
    accentMutedRecipeIngredients: '#EBF3D4', //зелений акцен пригнічений

    accentDark: '#22252A', //чорний що протиставляється акцену
    accentDarkMuted: '#2A2C36', //чорний що протиставляється акцену пригнічений

    text: '#23262A', //текст
    textDark: '#3E4462', //текст сірий
    textWhite: '#FAFAFA', //текст білий
    textWhiteMuted: 'rgba(250, 250, 250, 0.6)', //текст білий пригнічений
    textTitle: '#001833', //текст синій
    textError: '#fa2c2c', // червоний текст помилки
    subFooterText: '#22252A', // текст, який розташований під футером
    subFooterBtn: '#FAFAFA', // текст, який розташований у кнопці футера
    socialLinkIcons: '#8BAA36',
    socialLinkIconsHover: '#FAFAFA',
    searchIconStyled: '#22252A',
    defLight: '#FAFAFA',
    blackAndWhiteBrorderList: '#e0e0e0',
    editProfileModal: '#FAFAFA',
    profileModalCloseIcon: '#333333',
    popularRecipeDescription: '#7e7e7e',
    popularRecipesItemBox: '#7070702b',
    recipesFonts: '#3E4462',
    recipeHeaderList: '#23262A',
    selectRecipeBgcolor: "#FAFAFA",
    plateTitleBoxBgColor: "#FFFFFF",
    plateTitleTextColor: "#3E4462",
    selectBgColor: '#ECECEC',
    addBtnHover: '#8BAA36',
    addBtnText: '#FAFAFA',
    searchBtnHover: '#22252A',
    searchBtnText: '#FAFAFA',
    formFooterFormBtn: "rgba(250, 250, 250, 0.6)",


    modes: {
      white: {
        text: '#23262A', //текст
        textDark: '#3E4462', //текст сірий
        background: '#ECECEC',

        accent: '#8BAA36', //зелений акцен
        accentMuted: '#EBF3D4', //зелений акцен пригнічений
      },
      dark: {
        text: '#FAFAFA', //текст
        background: '#1E1F28',
        accentDark: '#22252A', //чорний що протиставляється акцену
        accentDarkMuted: '#2A2C36', //чорний що протиставляється акцену пригнічений
      },
    },
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
  },

  size: {
    // mobile: '320',
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
    // desktop: '1200px',
  },

  device: {
    // mobile: `(min-width: 320px)`,
    mobile: `(min-width: 375px)`,
    tablet: `(min-width: 768px)`,
    desktop: `(min-width: 1440px)`,
    // desktop: `(min-width: 1200px)`,
  },

  retinaBackgroundImage: `(min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx)`,
};

export const lightTheme = {
  colors: {
    white: '#FFFFFF', //білий
    dark: '#000000', //чорний

    whiteMuted: '#D9D9D9', //білий пригнічений деякі кнопки та інпути
    whiteMutedBorder: '#D9D9D9',
    bgWhite: '#ECECEC', //білий з bg

    bgDark: '#1E1F28', //чорний з bg
    accent: '#8BAA36', //зелений акцен
    accentCurrent: '#8BAA36', //!зелений акцен без змін
    buttonDelAccent: '#22252A',
    accentMuted: '#EBF3D4', //зелений акцен пригнічений
    accentMutedRecipeIngredients: '#EBF3D4', //зелений акцен пригнічений

    accentDark: '#22252A', //чорний що протиставляється акцену
    accentDarkMuted: '#2A2C36', //чорний що протиставляється акцену пригнічений

    text: '#23262A', //текст
    textDark: '#3E4462', //текст сірий
    textWhite: '#FAFAFA', //текст білий
    textWhiteMuted: 'rgba(250, 250, 250, 0.6)', //текст білий пригнічений
    textTitle: '#001833', //текст синій
    textError: '#fa2c2c', // червоний текст помилки
    subFooterText: '#22252A', // текст, який розташований під футером
    subFooterBtn: '#FAFAFA', // текст, який розташований у кнопці футера
    socialLinkIcons: '#8BAA36',
    socialLinkIconsHover: '#FAFAFA',
    searchIconStyled: '#22252A',
    defLight: '#FAFAFA',
    blackAndWhiteBrorderList: '#e0e0e0',
    editProfileModal: '#FAFAFA',
    profileModalCloseIcon: '#333333',
    popularRecipeDescription: '#7e7e7e',
    popularRecipesItemBox: '#7070702b',
    recipesFonts: '#3E4462',
    recipeHeaderList: '#23262A',
    selectRecipeBgcolor: "#FAFAFA",
    plateTitleBoxBgColor: "#FFFFFF",
    plateTitleTextColor: "#3E4462",
    selectBgColor: '#ECECEC',
    addBtnHover: '#8BAA36',
    addBtnText: '#FAFAFA',
    searchBtnHover: '#22252A',
    searchBtnText: '#FAFAFA',
    formFooterFormBtn: "rgba(250, 250, 250, 0.6)",


    modes: {
      white: {
        text: '#23262A', //текст
        textDark: '#3E4462', //текст сірий
        background: '#ECECEC',
        backgroundAccent: '#000000',

        accent: '#8BAA36', //зелений акцен
        accentGrey: '#EBF3D4', //зелений пригнічний на сірий
        accentGreen: '#EBF3D4', //зелений пригнічний на сірий
        accentMuted: '#EBF3D4', //зелений акцен пригнічений
      },
      dark: {
        text: '#FAFAFA', //текст
        background: '#1E1F28',

        accentDark: '#22252A', //чорний що протиставляється акцену
        accentDarkMuted: '#2A2C36', //чорний що протиставляється акцену пригнічений
      },
    },
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
  },

  size: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },

  device: {
    mobile: `(min-width: 375px)`,
    tablet: `(min-width: 768px)`,
    desktop: `(min-width: 1440px)`,
  },

  retinaBackgroundImage: `(min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx)`,
};

export const darkTheme = {
  colors: {
    white: '#2A2C36', //! темний замість білого
    dark: '#FFFFFF', // світлий замість чорного

    whiteMuted: 'rgb(34, 37, 42)', //! чоний  замість білого пригнічений деякі кнопки та інпути

    bgWhite: '#1E1F28', //! чорний замість білого з bg

    bgDark: '#ECECEC', //білий замість чорного з bg
    accent: '#22252A', //! чорний замість зеленого акценту
    accentCurrent: '#8BAA36', //!зелений акцен без змін
    buttonDelAccent: '#FAFAFA', //! білий замість зеленого акценту
    accentMuted: '#1E1F28', //! чорний замість зеленого акценту пригніченого
    accentMutedRecipeIngredients: '#2A2C36', //чорний акцен пригнічений
    whiteMutedBorder: '#3E4462',
    accentDark: '#8BAA36', //чорний що протиставляється акцену
    accentDarkMuted: '#2A2C36', //! зелений замість чорного що протиставляється акцену пригнічений
    text: '#FAFAFA', //текст
    textDark: '#FAFAFA', //текст білий замість сірого
    textWhite: '#FAFAFA', //! текст чорний замість білого
    textWhiteMuted: 'rgba(250, 250, 250, 0.6)', //текст білий пригнічений
    textTitle: '#FAFAFA', //текст синій
    textError: '#fa2c2c', // червоний текст помилки
    subFooterText: '#FAFAFA', // текст, який розташований під футером
    subFooterBtn: '#FAFAFA', // текст, який розташований у кнопці футера
    socialLinkIcons: '#FAFAFA',
    socialLinkIconsHover: '#22252A',
    searchIconStyled: '#FAFAFA',
    defLight: '#FAFAFA',
    blackAndWhiteBrorderList: '#fafafa4d',
    editProfileModal: '#1E1F28',
    profileModalCloseIcon: '#FAFAFA',
    popularRecipeDescription: '#fafafa99',
    popularRecipesItemBox: '#7070702b',
    recipesFonts: '#FAFAFA',
    recipeHeaderList: '#23262A',
    selectRecipeBgcolor: "#8BAA36",
    plateTitleBoxBgColor: "#2A2C36",
    plateTitleTextColor: "#FAFAFA",
    selectBgColor: '#8BAA36',
    addBtnHover: '#D9D9D9',
    addBtnText: '#FAFAFA',
    searchBtnHover: '#D9D9D9',
    searchBtnText: '#3E4462',
    formFooterFormBtn: "#FAFAFA",


    modes: {
      white: {
        text: '#23262A', //текст
        textDark: '#3E4462', //текст сірий
        background: '#1E1F28',
        backgroundAccent: '#000000',
        accent: '#8BAA36', //зелений акцен
        accentGrey: '#1E1F28', //зелений пригнічний на сірий
        accentGreen: '#8BAA36', //зелений пригнічний на сірий
        accentMuted: '#2A2C36', //! чорний замість зеленого акценту пригніченого
      },
      dark: {
        text: '#FAFAFA', //текст
        background: '#ECECEC',
        accentDark: '#FAFAFA', //! білий що протиставляється акцену
        accentDarkMuted: '#2A2C36', //чорний що протиставляється акцену пригнічений
      },
    },
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
  },

  size: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },

  device: {
    mobile: `(min-width: 375px)`,
    tablet: `(min-width: 768px)`,
    desktop: `(min-width: 1440px)`,
  },

  retinaBackgroundImage: `(min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx)`,
};
