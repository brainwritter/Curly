import * as React from 'react';
import { StyleSheet, View as RNView, ViewProperties, ViewStyle, StyleProp } from 'react-native';
import { base_margin } from '../common/metrics'

export interface ViewProps extends ViewProperties {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

export default class View extends React.PureComponent<ViewProps, any> {
  public render() {
    const { children, style } = this.props
    return (
      <RNView
        {...this.props}
        style={StyleSheet.flatten([styles.container, style])}
      >
        {children}
      </RNView>
    );
  }
}

interface Style {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: base_margin,
    paddingHorizontal: base_margin
  },
})
