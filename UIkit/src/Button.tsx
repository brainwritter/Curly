import * as React from 'react';
import { StyleSheet, TouchableNativeFeedback, ViewStyle, TextStyle, Text, View } from 'react-native';
import connector from '../lib/connector'
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
    log('theme', themeStyle)
    return (
      <TouchableNativeFeedback {...this.props}>
        <View {...this.props} style={StyleSheet.flatten([styles.container, style])}>
          <Text style={StyleSheet.flatten([textStyle, { ...themeStyle }])}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

type Style = {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default connector("Button", Button)


