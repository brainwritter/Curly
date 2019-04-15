import * as React from 'react';
import UseTheme from './useTheme'
import buildStyle from '../themes/buildStyle'

export default function withProps<P = {}>(selector: any, WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<P> {
    public render() {
      return (
        <UseTheme>
          {(context) => {
            return (
              <WrappedComponent
                {...this.props}
                {...buildingStyle(selector, context[selector], WrappedComponent.defaultProps)}
              // {...injectedProps}
              />
            )
          }}
        </UseTheme>
      )
    }
  }
}

function buildingStyle(component: string, styleContext: any, props: any) {
  const getStyle = buildStyle[component]
  return {
    themeStyle: getStyle(styleContext, props)
  }
}