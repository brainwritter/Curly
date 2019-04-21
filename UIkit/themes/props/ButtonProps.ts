
export interface ButtonInterface {
  type: 'primary' | 'secondary' | 'alternative';
  size: 'normal';
}

export const ButtonDefaultProps = {
  size: 'normal',
  type: 'primary'
}

export interface ButtonStyle {
  Button: {
    /** button background color */
    backgroundColor: {
      primary?: string,
      secondary?: string,
      alternative?: string
    }

    /** button radius */
    borderRadius?: number

    /** button size */
    size: {
      normal?: {
        width?: number,
        height?: number
      }
    }

    /** button text size */
    textSize: {
      normal: number
    }

    textWeight: {
      normal: string
    }

    /**
     * button text color
     */
    textColor: {
      primary?: string,
      secondary?: string,
      alternative?: string
    }

    /**
     * button metrics
     */
    padding?: {
      vertical?: number,
      horizontal?: number
    },
    margin?: {
      vertical?: number,
      horizontal?: number
    }
  }
}