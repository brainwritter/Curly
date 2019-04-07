export interface IButton {
  general?: boolean;
  primary?: boolean;
  secondary?: boolean;
  alternatif?: boolean;
}

export const IButtonDefaultProps = {
  general: true,
  primray: true,
  secondary: false,
  alternatif: false
}

export interface IButtonStyle {

  /** button background color */
  buttonBackgroundColor?: {
    primary?: string,
    secondary?: string,
    alternatif?: string
  }

  /** button radius */
  buttonBorderRadius?: number

  /** button size */
  buttonSize?: {
    general?: {
      width?: number,
      height?: number
    }
  }

  /** button text size */
  buttonTextSize?: {
    general?: {
      fontSize: number
    }
  }

  /**
   * button text color
   */
  buttonTextColor?: {
    primary?: string,
    secondary?: string,
    alternatif?: string
  }

  /**
   * button metrics
   */
  buttonPadding?: {
    vertical?: number,
    horizontal?: number
  },
  buttonMargin?: {
    vertical?: number,
    horizontal?: number
  }
}