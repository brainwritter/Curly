import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const margin_horizontal = 8
export const margin_vertical = 8
export const section = 24
export const base_margin = 8
export const double_base_margin = 16
export const small_margin = 4
export const double_section = 48
export const screen_width = width < height ? width : height
export const screen_height = width < height ? height : width
export const half_screen_height = height / 2
export const half_screen_width = width / 2
export const radius = 8
export const heading = 24