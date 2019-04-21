import { ButtonStyle } from '../themes/props/ButtonProps'
import { TextStyle } from '../themes/props/TextProps'
import { ViewStyle } from '../themes/props/ViewProps'

interface ICreateTheme extends ButtonStyle, TextStyle, ViewStyle { }

export default function createTheme(theme: ICreateTheme) {
  return theme
}