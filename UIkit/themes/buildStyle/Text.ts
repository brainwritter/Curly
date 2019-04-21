import { TextStyle as RNTextStyle } from 'react-native'
import { TextStyle, TextInterface } from '../props/TextProps'

interface componentProps extends TextInterface { }
interface StyleProps extends TextStyle { }

export default function (componentStyle: StyleProps, props: componentProps): RNTextStyle {
  const style = componentStyle.Text
  return {
    color: style.color[props.type],
    fontSize: style.size[props.size],
    fontFamily: style.weight[props.weight]
  };

};
