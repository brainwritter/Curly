import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
  marginHorizontal: 8,
  marginVertical: 8,
  section: 24,
  doubleSection: 48,
  smallMargin: 4,
  baseMargin: 8,
  doubleBaseMargin: 16,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  halfScreenWidth: width < height ? width / 2 : height / 2,
  halfScreenHeight: width < height ? height / 2 : width / 2,
  radius: 8,
}