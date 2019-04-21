import * as React from 'react'
import themesProvider from './themesProvider'
import curly from '../themes/curlyTheme'

const StyledContainer = themesProvider(curly)

export default function (props: any) {
  const { children } = props;
  return (
    <StyledContainer.Consumer>
      {children}
    </StyledContainer.Consumer>
  )
}
