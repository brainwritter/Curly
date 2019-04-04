import * as React from 'react';
import { StyleSheet, View as RNView, ViewStyle } from 'react-native';
import { base_margin, section } from '../common/metrics'

type ViewProps = {
  backgroundColor: string,
  center: boolean,
  children: React.ReactNode,
  // flex: boolean,
  section: boolean
  style: ViewStyle,
  // header: boolean,
  // small: boolean,
  // start: boolean,
  // end: boolean,
  // width: number,
  // height: number,
  // plain: boolean,
  // spaceBetween: boolean,
  // spaceAround: boolean,
  // verticalCenter: boolean,
  // row: boolean,
  // column: boolean,
  // backgroundColor: boolean,
  // borderRadius: number
}

export default class View extends React.PureComponent<ViewProps, any> {

  static defaultProps = {
    backgroundColor: null,
    center: false,
    // flex: false,
    section: false,
    style: null,
  }

  public render() {
    const {
      backgroundColor,
      center,
      children,
      // flex,
      section,
      style,
      // header,
      // small,
      // start,
      // end,
      // width,
      // height,
      // plain,
      // spaceBetween,
      // spaceAround,
      // verticalCenter,
      // row,
      // column,
      // borderRadius
    } = this.props
    return (
      <RNView
        {...this.props}
        style={StyleSheet.flatten([styles.container, style, {
          ...(section ? styles.section : null),
          // ...(flex ? { flex: 1 } : null),
          // ...(width ? { width: width } : null),
          // ...(height ? { height: height } : null),
          // ...(start ? { alignItems: 'flex-start' } : null),
          // ...(end ? { alignItems: 'flex-end' } : null),
          ...(center ? { alignItems: 'center' } : null),
          // ...(verticalCenter ? { justifyContent: 'center' } : null),
          // ...(plain ? { paddingVertical: 0, paddingHorizontal: 0 } : null),
          // ...(spaceBetween ? { justifyContent: 'space-between' } : null),
          // ...(spaceAround ? { justifyContent: 'space-around' } : null),
          // ...(row ? { flexDirection: 'row' } : null),
          // ...(column ? { flexDirection: 'column' } : null),
          ...(backgroundColor ? { backgroundColor } : null),
          // ...(borderRadius ? { borderRadius } : null)
        }])}
      >
        {children}
      </RNView>
    );
  }
}

type Style = {
  container: ViewStyle,
  section: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: base_margin,
    paddingHorizontal: base_margin
  },
  section: {
    paddingVertical: section,
    paddingHorizontal: section
  }
})
