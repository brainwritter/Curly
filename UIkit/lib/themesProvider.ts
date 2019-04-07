import * as React from 'react'

export default function themesProvider(combineThemes: object) {
  return React.createContext({
    theme: combineThemes
  })
}