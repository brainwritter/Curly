import createTheme from '../lib/createTheme';
import colors from '../common/colors';
import metrics from '../common/metrics';
import fonts from '../common/fonts'

export default createTheme({
  Button: {
    backgroundColor: {
      primary: colors.sanMarino,
      secondary: colors.peach,
      alternative: colors.white,
    },
    textColor: {
      primary: colors.white,
      secondary: colors.white,
      alternative: colors.black,
    },
    borderRadius: metrics.radius,
    size: {
      normal: {
        height: (7.8 * metrics.screenHeight) / 100,
      },
    },
    textSize: {
      normal: fonts.size.medium,
    },
    textWeight: {
      normal: '700'
    },
    margin: {
      vertical: metrics.marginVertical,
      horizontal: metrics.marginHorizontal,
    },
    padding: {
      vertical: metrics.doubleBaseMargin,
      horizontal: metrics.doubleBaseMargin,
    },
  },
  Text: {
    color: {
      primary: colors.black,
      secondary: colors.sanMarino,
      alternative: colors.peach
    },
    weight: {
      light: fonts.fontWeight.light,
      regular: fonts.fontWeight.regular,
      semiBold: fonts.fontWeight.semiBold,
      bold: fonts.fontWeight.bold,
    },
    size: {
      tiny: fonts.size.tiny,
      small: fonts.size.small,
      normal: fonts.size.normal,
      medium: fonts.size.medium,
      large: fonts.size.large,
    }
  },
  View: {
    backgroundColor: 'transparent',
    type: {
      default: {
        margin: {
          vertical: metrics.smallMargin,
          horizontal: metrics.smallMargin
        },
        padding: {
          vertical: metrics.baseMargin,
          horizontal: metrics.baseMargin
        },
      },
      section: {
        margin: {
          vertical: metrics.smallMargin,
          horizontal: metrics.smallMargin
        },
        padding: {
          vertical: metrics.section,
          horizontal: metrics.section
        },
      },
      small: {
        margin: {
          vertical: metrics.smallMargin,
          horizontal: metrics.smallMargin
        },
        padding: {
          vertical: metrics.smallMargin,
          horizontal: metrics.smallMargin
        },
      },
      plain: {
        margin: {
          vertical: 0,
          horizontal: 0
        },
        padding: {
          vertical: 0,
          horizontal: 0
        },
      },
    },
    borderRadius: (7.8 * metrics.screenHeight) / 100
  }
});
