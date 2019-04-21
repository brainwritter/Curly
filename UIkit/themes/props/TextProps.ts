
export interface TextInterface {
  type: 'primary' | 'secondary' | 'alternative';
  size: 'tiny' | 'small' | 'normal' | 'medium' | 'large';
  weight: 'light' | 'regular' | 'semiBold' | 'bold';
}

export const TextDefaultProps = {
  type: 'primary',
  size: 'normal',
  weight: 'regular'
}

export interface TextStyle {
  Text: {
    /** button background color */
    color: {
      primary?: string,
      secondary?: string,
      alternative?: string
    }

    /** button size */
    size: {
      tiny?: number,
      small?: number,
      normal?: number,
      medium?: number,
      large?: number,
    }

    weight: {
      light?: string,
      regular?: string,
      semiBold?: string,
      bold?: string
    }
  }
}