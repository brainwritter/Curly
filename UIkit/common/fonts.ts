import colors from './colors';

export const fontFamily = {
  base: 'Roboto-Regular',
  bold: 'Roboto-Bold',
};

const FontColour = {
  Primary: {
    color: colors.black,
  },
  Secondary: {
    color: colors.peach,
  },
  Alternative: {
    color: colors.charlotte,
  },
  Description: {
    color: colors.textSafe,
  },
};

const size = {
  tiny: 9,
  small: 11,
  medium: 13,
  large: 15,
  veryLarge: 17,
};

const FontStyle = {
  // Basic Font Style
  tiny: {
    fontFamily: fontFamily.base,
    fontSize: size.tiny,
  },
  small: {
    fontFamily: fontFamily.base,
    fontSize: size.small,
  },
  medium: {
    fontFamily: fontFamily.base,
    fontSize: size.medium,
  },
  large: {
    fontFamily: fontFamily.base,
    fontSize: size.large,
  },
  veryLarge: {
    fontFamily: fontFamily.base,
    fontSize: size.veryLarge,
  },

  // Bold Font Style
  tinyBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.tiny,
  },
  smallBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.small,
  },
  mediumBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.medium,
  },
  largeBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.large,
  },
  veryLargeBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.veryLarge,
  },
};

// TEXT PRIMARY WITH VARIOUS SIZE
export const TEXT_PRIMARY_TINY = {
  ...FontStyle.tiny,
  ...FontColour.Primary,
};
export const TEXT_PRIMARY_SMALL = {
  ...FontStyle.small,
  ...FontColour.Primary,
};
export const TEXT_PRIMARY_MEDIUM = {
  ...FontStyle.medium,
  ...FontColour.Primary,
};
export const TEXT_PRIMARY_LARGE = {
  ...FontStyle.large,
  ...FontColour.Primary,
};
export const TEXT_PRIMARY_VERYLARGE = {
  ...FontStyle.veryLarge,
  ...FontColour.Primary,
};

// TEXT SECONDARY WITH VARIOUS SIZE
export const TEXT_SECONDARY_TINY = {
  ...FontStyle.tiny,
  ...FontColour.Secondary,
};
export const TEXT_SECONDARY_SMALL = {
  ...FontStyle.small,
  ...FontColour.Secondary,
};
export const TEXT_SECONDARY_MEDIUM = {
  ...FontStyle.medium,
  ...FontColour.Secondary,
};
export const TEXT_SECONDARY_LARGE = {
  ...FontStyle.large,
  ...FontColour.Secondary,
};
export const TEXT_SECONDARY_VERYLARGE = {
  ...FontStyle.veryLarge,
  ...FontColour.Secondary,
};

// TEXT ALTERNATIVE WITH VARIOUS SIZE
export const TEXT_ALTERNATIVE_TINY = {
  ...FontStyle.tiny,
  ...FontColour.Alternative,
};
export const TEXT_ALTERNATIVE_SMALL = {
  ...FontStyle.small,
  ...FontColour.Alternative,
};
export const TEXT_ALTERNATIVE_MEDIUM = {
  ...FontStyle.medium,
  ...FontColour.Alternative,
};
export const TEXT_ALTERNATIVE_LARGE = {
  ...FontStyle.large,
  ...FontColour.Alternative,
};
export const TEXT_ALTERNATIVE_VERYLARGE = {
  ...FontStyle.veryLarge,
  ...FontColour.Alternative,
};

// TEXT DESCRIPTION WITH VARIOUS SIZE
export const TEXT_DESCRIPTION_TINY = {
  ...FontStyle.tiny,
  ...FontColour.Description,
};
export const TEXT_DESCRIPTION_SMALL = {
  ...FontStyle.small,
  ...FontColour.Description,
};
export const TEXT_DESCRIPTION_MEDIUM = {
  ...FontStyle.medium,
  ...FontColour.Description,
};
export const TEXT_DESCRIPTION_LARGE = {
  ...FontStyle.large,
  ...FontColour.Description,
};
export const TEXT_DESCRIPTION_VERYLARGE = {
  ...FontStyle.veryLarge,
  ...FontColour.Description,
};
