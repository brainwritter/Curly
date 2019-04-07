import * as React from 'react';
import themeProvider from './themesProvider'
import curly from '../themes/curlyTheme'
const ThemeContext = themeProvider(curly)

// const withProps = <P> => {
//   return class ThemeComponents extends React.Component {
//     public render() {
//       return (
//         <Component {...injectedProps} />
//       )
//     }
//   }
// }


// export function withProps<P = {}>(
//   WrappedComponent: React.ComponentType<P>
// ): React.ComponentClass<P> {
//   return class extends React.Component<P> {
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }  

export function withProps<P = {}>(injectedProps: any, WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<P> {
    public render() {
      return (
        <WrappedComponent {...injectedProps} />
      )
    }
  }
}

export function withStyle(callback: Function) {
  const styleContext = React.useContext(ThemeContext)
  return callback(styleContext)
}

  // export const withStyle = ()
/* <ThemeContext.Consumer>
        {(context) => ( */
// export default withProps