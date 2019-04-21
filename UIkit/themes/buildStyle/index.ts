import Button from './Button'
import Text from './Text'
import View from './View'

const registeredStyle = {
  Text,
  Button,
  View
}

export type BuildStyleType = 'Text' | 'Button' | 'View'

export default function (componentName: BuildStyleType, context: any, props: any) {
  return registeredStyle[componentName](context, props)
}