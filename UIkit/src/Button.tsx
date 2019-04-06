import * as React from 'react';
import { StyleSheet, TouchableNativeFeedback, ViewStyle, TextStyle, Text, View } from 'react-native';
import { radius, double_base_margin, screen_height } from '../common/metrics'
import colors from '../common/colors'

type ButtonProps = {
  style: ViewStyle,
  textStyle: TextStyle,
  large: boolean,
  small: boolean,
  primary: boolean,
  secondary: boolean,
  children: string,
  onPress?: () => void
}

class Button extends React.PureComponent<ButtonProps> {

  static defaultProps = {
    large: true,
    small: false,
    primary: false,
    secondary: false,
    style: null,
    textStyle: null
  }

  public render() {
    const { style, textStyle, large, small, primary, children, onPress, secondary } = this.props
    return (
      <TouchableNativeFeedback {...this.props} onPress={onPress}>
        <View {...this.props} style={StyleSheet.flatten([styles.container, style, {
          ...large ? styles.large : null,
          ...small ? styles.small : null,
          ...primary ? { backgroundColor: colors.sanMarino } : null,
          ...secondary ? { backgroundColor: colors.charlotte } : null
        }])}>
          <Text style={StyleSheet.flatten([styles.defaultText, textStyle])}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

type Style = {
  container: ViewStyle,
  large: ViewStyle,
  small: ViewStyle,
  defaultText: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    borderRadius: radius,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingVertical: double_base_margin,
    paddingHorizontal: double_base_margin,
  },
  large: {
    height: (7.8 * screen_height) / 100
  },
  small: {
    height: (4.8 * screen_height) / 100
  },
  defaultText: {
    color: colors.black,
    textAlign: 'center'
  }
});

export default Button;


