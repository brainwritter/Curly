import * as React from 'react';
import { StyleSheet, View as RNView, ViewStyle, StyleProp } from 'react-native';
import { base_margin } from '../common/metrics'

type ViewProps = {
  style: StyleProp<ViewStyle>,
  backgroundColor: string
  children: React.ReactNode
  style: ViewStyle,
  header: boolean,
  flex: boolean,
  small: boolean,
  start: boolean,
  center: boolean,
  end: boolean,
  width: number,
  height: number,
  plain: boolean,
  spaceBetween: boolean,
  spaceAround: boolean,
  verticalCenter: boolean,
  row: boolean,
  column: boolean,
  backgroundColor: boolean,
  borderRadius: number
}

export default class View extends React.PureComponent<ViewProps, any> {
  static defaultProps = {
    style: null,
    backgroundColor: null
  }

  public render() {
    const { children,
      style,
      header,
      flex,
      small,
      start,
      center,
      end,
      width,
      height,
      plain,
      spaceBetween,
      spaceAround,
      verticalCenter,
      row,
      column,
      backgroundColor,
      borderRadius } = this.props
    return (
      <RNView
        {...this.props}
        style={StyleSheet.flatten([styles.container, style, {
          ...(flex ? { flex: 1 } : null),
          ...(width ? { width: width } : null),
          ...(height ? { height: height } : null),
          ...(start ? { alignItems: 'flex-start' } : null),
          ...(end ? { alignItems: 'flex-end' } : null),
          ...(center ? { alignItems: 'center' } : null),
          ...(verticalCenter ? { justifyContent: 'center' } : null),
          ...(plain ? { paddingVertical: 0, paddingHorizontal: 0 } : null),
          ...(spaceBetween ? { justifyContent: 'space-between' } : null),
          ...(spaceAround ? { justifyContent: 'space-around' } : null),
          ...(row ? { flexDirection: 'row' } : null),
          ...(column ? { flexDirection: 'column' } : null),
          ...(backgroundColor ? { backgroundColor } : null),
          ...(borderRadius ? { borderRadius } : null)
        }])}
      >
        {children}
      </RNView>
    );
  }
}

type Style = {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: base_margin,
    paddingHorizontal: base_margin
  },
})
