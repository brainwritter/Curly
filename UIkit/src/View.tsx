import * as React from 'react';
import { StyleSheet, View as RNView, ViewStyle, StyleProp } from 'react-native';
import { base_margin } from '../common/metrics'

type ViewProps = {
  style: StyleProp<ViewStyle>;
}

export default class View extends React.PureComponent<ViewProps, any> {
  public render() {
    const { style } = this.props
    return (
      <RNView
        {...this.props}
        style={StyleSheet.flatten([styles.container, style])}
      >
        {React.Children}
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
