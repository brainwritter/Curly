import * as React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import colors from '../common/colors';


type ContainerProps = {
  style: StyleProp<ViewStyle>,
  children: React.ReactNode
}

class Container extends React.PureComponent<ContainerProps, any> {
  static defaultProps = {
    style: null
  }

  public render() {
    const { style, children } = this.props
    return (
      <View
        {...this.props}
        style={StyleSheet.flatten([styles.base, style])}>
        {children}
      </View>
    );
  }
}

type Style = {
  base: ViewStyle
}

const styles = StyleSheet.create<Style>({
  base: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: isIphoneX() ? 35 : 0
  }
})

export default Container