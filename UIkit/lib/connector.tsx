import * as React from 'react';
import UseTheme from './useTheme'
import buildStyle from '../themes/buildStyle'
import { BuildStyleType } from '../themes/buildStyle'

export default function <P = {}>(WrappedComponent: React.ComponentType<P>) {
  return class WithProps extends React.Component<P> {
    public render() {
      const selector: any = WrappedComponent.displayName
      return (
        <UseTheme>
          {(context: any) => {
            return (
              <WrappedComponent
                {...this.props}
                {...bindStyle(selector, context, { ...WrappedComponent.defaultProps, ...this.props })}
              />
            )
          }}
        </UseTheme>
      )
    }
  }
}

function bindStyle(component: BuildStyleType, styleContext: any, props: any) {
  const getComponentStyle = buildStyle(component, styleContext, props)
  return {
    themeStyle: getComponentStyle
  }
}