import * as React from 'react';
import connector from '../lib/connector'
import { StyleSheet, View as RNView, ViewStyle as RNViewStyle } from 'react-native';
import { ViewDefaultProps, ViewInterface } from '../themes/props/ViewProps'
import { Color, ColorProperty } from 'csstype';

interface ViewProps extends ViewInterface, RNViewStyle {
  children: React.ReactNode;
  style: RNViewStyle;
  justifyContent: 'space-around' | 'center' | 'space-between' | 'flex-end' | 'flex-start' | 'space-evenly';
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  backgroundColor: string;
  flex: number;
  borderRadius: number;
}
class View extends React.PureComponent<ViewProps, any> {

  static defaultProps = {
    ...ViewDefaultProps,
    style: null
  }

  public render() {
    const {
      children,
      style,
      themeStyle
    } = this.props
    return (
      <RNView
        {...this.props}

        style={StyleSheet.flatten([style, themeStyle])}
      >
        {children}
      </RNView>
    );
  }
}

export default connector(View)
