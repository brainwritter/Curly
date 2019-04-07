import * as React from 'react';
import { StyleSheet, TouchableNativeFeedback, ViewStyle, TextStyle, Text, View } from 'react-native';
import metrics from '../common/metrics'
import colors from '../common/colors'
import { withProps, withStyle } from '../lib/connector'
import { IButton, IButtonDefaultProps } from '../lib/themeProps'

interface ButtonProps extends IButton {
  style?: ViewStyle;
  textStyle?: TextStyle;
  children: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { style, textStyle, children } = props;
  return (
    <TouchableNativeFeedback {...props}>
      <View {...props} style={StyleSheet.flatten([styles.container, style])}>
        <Text style={StyleSheet.flatten([textStyle])}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

Button.defaultProps = {
  style: {},
  textStyle: {}
}

type Style = {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  }
});

export default withProps(IButtonDefaultProps, Button)


