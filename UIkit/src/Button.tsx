import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, ButtonProperties, ViewStyle, TouchableOpacityProperties, TouchableOpacityProps } from 'react-native';
import { radius, double_section, section } from '../common/metrics'
import { peach } from '../common/colors'

interface ButtonProps extends TouchableOpacityProperties {
  children: string;
  style: TouchableOpacityProps;
  large: boolean,
  small: boolean,
  primary: boolean
}

class Button extends React.PureComponent<ButtonProps, any> {

  static defaultProps = {
    large: true,
    small: false,
    primary: true
  }

  public render() {
    const { children, style, large, small, primary } = this.props
    return (
      <TouchableOpacity style={StyleSheet.flatten([styles.container, style, {
        ...large && styles.large,
        ...small && styles.small,
        ...primary && { backgroundColor: peach }
      }])}>
        <Text>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

interface Style {
  container: ViewStyle,
  large: ViewStyle,
  small: ViewStyle,
}

const styles = StyleSheet.create<Style>({
  container: {
    borderRadius: radius,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  large: {
    height: double_section
  },
  small: {
    height: section
  }
});

export default Button;


