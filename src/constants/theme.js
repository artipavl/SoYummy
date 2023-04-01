export const theme = {
  colors: {
    white: '#FFFFFF', //білий
    dark: '#000000', //чорний

    whiteMuted: '#D9D9D9', //білий пригнічений деякі кнопки та інпути
    bgWhite: '#ECECEC', //білий з bg

    bgDark: '#1E1F28', //чорний з bg
    accent: '#8BAA36', //зелений акцен
    accentMuted: '#EBF3D4', //зелений акцен пригнічений

    accentDark: '#22252A', //чорний що протиставляється акцену
    accentDarkMuted: '#2A2C36', //чорний що протиставляється акцену пригнічений

    text: '#23262A', //текст
    textDark: '#3E4462', //текст сірий
    textWhite: '#FAFAFA', //текст білий
    textWhiteMuted: 'rgba(250, 250, 250, 0.6)', //текст білий пригнічений

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
