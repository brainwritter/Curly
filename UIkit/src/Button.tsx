import * as React from 'react';
import connector from '../lib/connector'
import { StyleSheet, TouchableNativeFeedback, ViewStyle, TextStyle, Text, View } from 'react-native';
import { ButtonInterface, ButtonDefaultProps } from '../themes/props/ButtonProps'

interface ButtonProps extends ButtonInterface {
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: string;
  themeStyle: ViewStyle;
}

class Button extends React.PureComponent<ButtonProps> {

  static defaultProps = {
    ...ButtonDefaultProps,
    style: {},
    textStyle: {},
  }

  public render() {
    const { style, textStyle, children, themeStyle } = this.props;
    return (
      <TouchableNativeFeedback {...this.props}>
        <View {...this.props} style={StyleSheet.flatten([{ ...themeStyle.Button }, styles.container, style])}>
          <Text style={StyleSheet.flatten([{ ...themeStyle.Text }, textStyle, styles.textContainer])}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

type Style = {
  container: ViewStyle,
  textContainer: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textContainer: {
    textAlign: 'center'
  }
});

export default connector(Button)


