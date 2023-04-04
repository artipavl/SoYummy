const commonFormStyles = {
  fontSize: '12px',
  lineHeight: '1.5',
  marginLeft: '28px',
  marginTop: '12px',
};

const formStyles = {
  message: {
    warning: {
      ...commonFormStyles,
      color: '#F6C23E',
    },
    error: {
      ...commonFormStyles,
      color: '#E74A3B',
    },
    success: {
      ...commonFormStyles,
      color: '#3CBC81',
    },
  },
};

export default formStyles;
