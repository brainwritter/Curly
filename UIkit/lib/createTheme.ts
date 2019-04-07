import * as R from 'ramda';
import { IButtonStyle, IButtonProps } from './themeProps'

interface ICreateTheme extends IButtonStyle, IButtonProps { }

export default function createTheme(theme: ICreateTheme) {
  return theme
}