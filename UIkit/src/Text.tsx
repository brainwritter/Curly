import * as React from 'react';
import { Text as RNText, TextStyle, StyleSheet } from 'react-native'
import connector from '../lib/connector'
import { TextInterface, TextDefaultProps } from '../themes/props/TextProps'

interface TextProps extends TextInterface {
  children: string,
  style: TextStyle,
  alignCenter: boolean,
  themeStyle: TextStyle
}

class Text extends React.PureComponent<TextProps> {

  static defaultProps = {
    ...TextDefaultProps,
    heading: false,
    style: null,
    alignCenter: null
  }

  public render() {
    const { alignCenter, children, style, themeStyle } = this.props
    return <RNText {...this.props} style={StyleSheet.flatten([
      themeStyle,
      style,
      {
        ...(alignCenter ? { textAlign: 'center' } : null)
      }])}>
      {children}
    </RNText>
  }
}

export default connector(Text)