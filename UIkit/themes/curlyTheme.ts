import createTheme from '../lib/createTheme'
import colors from '../common/colors'
import metrics from '../common/metrics';

export default createTheme({
  buttonBackgroundColor: {
    primary: colors.sanMarino,
    secondary: colors.peach,
    alternatif: colors.white
  },
  buttonTextColor: {
    primary: colors.white,
    secondary: colors.white,
    alternatif: colors.black
  },
  buttonBorderRadius: metrics.radius,
  buttonSize: {
    general: {
      height: (7.8 * metrics.screenHeight) / 100
    }
  },
  buttonTextSize: {
    general: {
      fontSize: 14
    }
  },
  buttonMargin: {
    vertical: metrics.marginVertical,
    horizontal: metrics.marginHorizontal
  },
  buttonPadding: {
    vertical: metrics.doubleBaseMargin,
    horizontal: metrics.doubleBaseMargin
  }
});