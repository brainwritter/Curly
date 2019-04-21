
export interface ViewInterface {
  type: 'section' | 'plain' | 'default' | 'small';
  flex: number;
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent: 'space-around' | 'center' | 'space-between' | 'flex-end' | 'flex-start' | 'space-evenly';
  backgroundColor: string;
  borderRadius: number;
}

export const ViewDefaultProps = {
  type: 'default'
}

export interface ViewStyle {
  View: {
    backgroundColor?: string,

    type: {
      default: {
        padding: {
          vertical?: number,
          horizontal?: number
        }

        margin: {
          vertical?: number,
          horizontal?: number
        },
      },
      section: {
        padding: {
          vertical?: number,
          horizontal?: number
        }

        margin: {
          vertical?: number,
          horizontal?: number
        },
      },
      small: {
        padding: {
          vertical?: number,
          horizontal?: number
        }

        margin: {
          vertical?: number,
          horizontal?: number
        },
      },
      plain: {
        padding: {
          vertical?: number,
          horizontal?: number
        }

        margin: {
          vertical?: number,
          horizontal?: number
        },
      }
    }

    borderRadius?: number
  }
}