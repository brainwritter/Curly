import createTheme from '../lib/createTheme'
import colors from '../common/colors'
import metrics from '../common/metrics';

export default createTheme({
  Button: {
    backgroundColor: {
      primary: colors.sanMarino,
      secondary: colors.peach,
      alternatif: colors.white
    },
    textColor: {
      primary: colors.white,
      secondary: colors.white,
      alternatif: colors.black
    },
    borderRadius: metrics.radius,
    size: {
      normal: {
        height: (7.8 * metrics.screenHeight) / 100
      }
    },
    textSize: {
      normal: 14
    },
    margin: {
      vertical: metrics.marginVertical,
      horizontal: metrics.marginHorizontal
    },
    padding: {
      vertical: metrics.doubleBaseMargin,
      horizontal: metrics.doubleBaseMargin
    }
  }
});