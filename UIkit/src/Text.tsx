import * as React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import colors from '../common/colors';
import { heading } from '../common/metrics';

import {
  TEXT_PRIMARY_TINY,
  TEXT_PRIMARY_SMALL,
  TEXT_PRIMARY_MEDIUM,
  TEXT_PRIMARY_LARGE,
  TEXT_PRIMARY_VERYLARGE,
  TEXT_SECONDARY_TINY,
  TEXT_SECONDARY_SMALL,
  TEXT_SECONDARY_MEDIUM,
  TEXT_SECONDARY_LARGE,
  TEXT_SECONDARY_VERYLARGE,
  TEXT_ALTERNATIVE_TINY,
  TEXT_ALTERNATIVE_SMALL,
  TEXT_ALTERNATIVE_MEDIUM,
  TEXT_ALTERNATIVE_LARGE,
  TEXT_ALTERNATIVE_VERYLARGE,
  TEXT_DESCRIPTION_TINY,
  TEXT_DESCRIPTION_SMALL,
  TEXT_DESCRIPTION_MEDIUM,
  TEXT_DESCRIPTION_LARGE,
  TEXT_DESCRIPTION_VERYLARGE,
  fontFamily,
} from '../common/fonts';

type TextProps = {
  // BASIC PROPS
  children: string;
  heading: boolean;
  style: TextStyle;
  alignCenter: boolean;
  // COLOUR
  primary: boolean;
  secondary: boolean;
  alternative: boolean;
  description: boolean;
  // SIZE
  tiny: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  veryLarge: boolean;
  // BOLD
  bold: boolean;
};

export default class Text extends React.PureComponent<TextProps> {
  static defaultProps = {
    heading: false,
    style: null,
    alignCenter: null,
    // COLOUR
    primary: false,
    secondary: false,
    alternative: false,
    description: false,
    // SIZE
    tiny: false,
    small: false,
    medium: false,
    large: false,
    veryLarge: false,
    // BOLD
    bold: false,
  };

  public textStyle = () => {
    const { primary, secondary, alternative, description } = this.props;
    const { tiny, small, medium, large, veryLarge } = this.props;

    if ((primary || !primary) && !secondary && !alternative && !description) {
      if (tiny) {
        return TEXT_PRIMARY_TINY;
      }
      if (small) {
        return TEXT_PRIMARY_SMALL;
      }
      if (medium) {
        return TEXT_PRIMARY_MEDIUM;
      }
      if (large) {
        return TEXT_PRIMARY_LARGE;
      }
      if (veryLarge) {
        return TEXT_PRIMARY_VERYLARGE;
      }

      return TEXT_PRIMARY_MEDIUM;
    }

    if (secondary) {
      if (tiny) {
        return TEXT_SECONDARY_TINY;
      }
      if (small) {
        return TEXT_SECONDARY_SMALL;
      }
      if (medium) {
        return TEXT_SECONDARY_MEDIUM;
      }
      if (large) {
        return TEXT_SECONDARY_LARGE;
      }
      if (veryLarge) {
        return TEXT_SECONDARY_VERYLARGE;
      }

      return TEXT_SECONDARY_MEDIUM;
    }

    if (alternative) {
      if (tiny) {
        return TEXT_ALTERNATIVE_TINY;
      }
      if (small) {
        return TEXT_ALTERNATIVE_SMALL;
      }
      if (medium) {
        return TEXT_ALTERNATIVE_MEDIUM;
      }
      if (large) {
        return TEXT_ALTERNATIVE_LARGE;
      }
      if (veryLarge) {
        return TEXT_ALTERNATIVE_VERYLARGE;
      }

      return TEXT_ALTERNATIVE_MEDIUM;
    }

    if (description) {
      if (tiny) {
        return TEXT_DESCRIPTION_TINY;
      }
      if (small) {
        return TEXT_DESCRIPTION_SMALL;
      }
      if (medium) {
        return TEXT_DESCRIPTION_MEDIUM;
      }
      if (large) {
        return TEXT_DESCRIPTION_LARGE;
      }
      if (veryLarge) {
        return TEXT_DESCRIPTION_VERYLARGE;
      }

      return TEXT_DESCRIPTION_MEDIUM;
    }

    return TEXT_PRIMARY_MEDIUM;
  };

  public render() {
    const { alignCenter, children, heading, style, bold } = this.props;
    return (
      <RNText
        {...this.props}
        style={StyleSheet.flatten([
          this.textStyle(),
          style,
          {
            ...(heading ? styles.heading : null),
            ...(alignCenter ? { textAlign: 'center' } : null),
            ...(bold ? { fontFamily: fontFamily.bold } : null),
          },
        ])}
      >
        {children}
      </RNText>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: colors.textSafe,
  },
  heading: {
    fontSize: heading,
    fontWeight: '700',
  },
});
