import * as React from 'react'
import themesProvider from './themesProvider'
import curly from '../themes/curlyTheme'

const StyledContainer = themesProvider(curly)

export default function ({ children }) {

  return (
    <StyledContainer.Consumer>
      {children}
    </StyledContainer.Consumer>
  )
}
