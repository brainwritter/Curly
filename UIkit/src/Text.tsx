import * as React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native'
import colors from '../common/colors';
import { heading } from '../common/metrics';

type TextProps = {
  children: string,
  heading: boolean,
  style: TextStyle,
  alignCenter: boolean
}

export default class Text extends React.PureComponent<TextProps> {

  static defaultProps = {
    heading: false,
    style: null,
    alignCenter: null
  }

  public render() {
    const { alignCenter, children, heading, style } = this.props
    return <RNText {...this.props} style={StyleSheet.flatten([styles.default, style, {
      ...(heading ? styles.heading : null),
      ...(alignCenter ? { textAlign: 'center' } : null)
    }])}>
      {children}
    </RNText>
  }
}

const styles = StyleSheet.create({
  default: {
    color: colors.textSafe,
  },
  heading: {
    fontSize: heading,
    fontWeight: '700'
  }
})
